import { Component, inject, signal } from '@angular/core'
import { ConfirmationService, MessageService } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { DialogModule } from 'primeng/dialog'
import { ToastModule } from 'primeng/toast'
import { finalize } from 'rxjs'

import { ProfileForm } from './components/profile-form/profile-form'
import { ProfileList } from './pages/profile-list/profile-list'
import { Profile, ProfileFormValue, ProfilePayload } from '../../core/models/profile-model'
import { ProfileService } from '../../core/services/profile-service'

@Component({
  selector: 'app-forms-lab',
  imports: [
    ButtonModule,
    DialogModule,
    CardModule,
    ToastModule,
    ConfirmDialogModule,
    ProfileForm,
    ProfileList,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './forms-lab.html',
  styleUrl: './forms-lab.scss',
})
export class FormsLab {
  private confirmationService = inject(ConfirmationService)
  private messageService = inject(MessageService)
  private profileService = inject(ProfileService)

  profile: Profile | null = null
  isDialogVisible = signal(false)
  isLoading = false

  openDialog(profile?: Profile) {
    this.profile = profile ? profile : null
    this.isDialogVisible.set(true)
  }

  closeDialog() {
    this.profile = null
    this.isDialogVisible.set(false)
  }

  onCreateProfile(formValue: ProfileFormValue): void {
    const payload = this.mapToPayload(formValue)
    if (!payload) return

    this.isLoading = true
    this.profileService
      .createProfile(payload)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(() => {
        this.toastSuccess('Profile created successfully')
        this.closeDialog()
      })
  }

  onUpdateProfile(formValue: ProfileFormValue): void {
    if (!this.profile) return

    const payload: Profile = { ...this.profile, ...this.mapToPayload(formValue) }
    this.isLoading = true
    this.profileService
      .updateProfile(this.profile!.id, payload)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(() => {
        this.toastSuccess('Profile updated successfully')
        this.closeDialog()
      })
  }

  onConfirmDelete(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this profile?',
      header: 'Delete Profile',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        variant: 'text',
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },
      accept: () => this.onDeleteProfile(id),
    })
  }

  private onDeleteProfile(id: number): void {
    this.isLoading = true
    this.profileService
      .deleteProfile(id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(() => this.toastSuccess('Profile deleted successfully'))
  }

  private mapToPayload(formValue: ProfileFormValue): ProfilePayload | null {
    if (!this.validateForm(formValue)) return null

    const payload = {
      email: formValue.email,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      birthDay: formValue.birthDay as Date,
      phone: formValue.phone,
    }

    return payload
  }

  private validateForm(formValue: ProfileFormValue): boolean {
    if (!formValue.birthDay) {
      this.toastError('Birthday is required')
      return false
    }

    return true
  }

  private toastSuccess(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    })
  }

  private toastError(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    })
  }
}
