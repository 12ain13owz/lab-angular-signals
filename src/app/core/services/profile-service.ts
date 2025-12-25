import { Injectable, Signal, signal } from '@angular/core'

import { Profile } from '../models/profile'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles = signal<Profile[]>([])

  getProfiles(): Signal<Profile[]> {
    return this.profiles
  }

  createProfile(profile: Profile): void {
    this.profiles.set([...this.profiles(), profile])
  }

  updateProfile(updateProfile: Profile): void {
    this.profiles.update((list) =>
      list.map((profile) => (profile.id === updateProfile.id ? updateProfile : profile))
    )
  }

  deleteProfile(id: number): void {
    this.profiles.update((list) => list.filter((profile) => profile.id !== id))
  }
}
