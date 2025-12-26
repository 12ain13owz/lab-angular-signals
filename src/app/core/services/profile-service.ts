import { Injectable, Signal, signal } from '@angular/core'
import { delay, Observable, of, take, tap } from 'rxjs'

import { Profile, ProfilePayload } from '../models/profile-model'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles = signal<Profile[]>([])
  private nextId = 1
  private time = 400

  getProfiles(): Signal<Profile[]> {
    return this.profiles.asReadonly()
  }

  createProfile(payload: ProfilePayload): Observable<Profile> {
    const profile: Profile = { ...payload, id: this.nextId++ }

    return of(profile).pipe(
      delay(this.time),
      tap(() => this.profiles.update((profiles) => [...profiles, profile])),
      take(1)
    )
  }

  updateProfile(id: number, payload: Profile): Observable<Profile> {
    return of(payload).pipe(
      delay(this.time),
      tap(() =>
        this.profiles.update((list) =>
          list.map((profile) => (profile.id === id ? payload : profile))
        )
      ),
      take(1)
    )
  }

  deleteProfile(id: number): Observable<void> {
    return of(void 0).pipe(
      tap(() => this.profiles.update((list) => list.filter((profile) => profile.id !== id))),
      take(1)
    )
  }
}
