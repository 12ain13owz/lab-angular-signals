import { CommonModule } from '@angular/common'
import { Component, inject, output } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { TableModule } from 'primeng/table'

import { Profile } from '../../../../core/models/profile-model'
import { ProfileService } from '../../../../core/services/profile-service'

@Component({
  selector: 'app-profile-list',
  imports: [CommonModule, CardModule, TableModule, ButtonModule, DividerModule],
  templateUrl: './profile-list.html',
  styleUrl: './profile-list.scss',
})
export class ProfileList {
  private profileService = inject(ProfileService)
  profiles = this.profileService.getProfiles()

  updated = output<Profile>()
  deleted = output<number>()

  getFullName(profile: Profile): string {
    return `${profile.firstName} ${profile.lastName}`
  }

  onUpdate(profile: Profile) {
    this.updated.emit(profile)
  }

  onDelete(profile: Profile) {
    this.deleted.emit(profile.id)
  }
}
