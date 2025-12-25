import { CommonModule } from '@angular/common'
import { Component, effect, input, output } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ButtonModule } from 'primeng/button'

import { Profile, ProfileFormControl, ProfileFormValue } from '../../../../core/models/profile'

@Component({
  selector: 'app-profile-form',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './profile-form.html',
  styleUrl: './profile-form.scss',
})
export class ProfileForm {
  profile = input<Profile | null>(null)
  $profile = toObservable(this.profile)

  submitted = output<ProfileFormValue>()
  cancelled = output<void>()

  form = this.initializeForm()

  constructor() {
    // 1. (Signals effect): ใช้ effect เพื่อ patchValue เมื่อ profile มีค่า แล้ว destroy ทันที
    const effectRef = effect(() => {
      const profile = this.profile()
      if (!profile) return

      this.form.patchValue(profile)
      effectRef.destroy()
    })

    // 2. (RxJS): ใช้ RxJS เพื่อ patchValue เมื่อ profile มีค่า แล้ว unsubscribe ทันที
    // this.$profile
    //   .pipe(
    //     filter((profile) => !!profile),
    //     take(1),
    //     takeUntilDestroyed()
    //   )
    //   .subscribe((profile) => this.form.patchValue(profile))
  }

  onSubmit() {
    if (this.form.invalid) return

    const rawValue = this.form.getRawValue()
    this.submitted.emit(rawValue)
  }

  onCancel() {
    this.cancelled.emit()
  }

  onReset(): void {
    const profile = this.profile()
    if (profile) return this.form.reset(profile)

    this.form.reset()
  }

  private initializeForm(): FormGroup<ProfileFormControl> {
    return new FormGroup<ProfileFormControl>({
      avatar: new FormControl(''),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      firstName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      lastName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      birthday: new FormControl<Date | null>(null, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      phone: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      hobbies: new FormControl<string[]>([], {
        nonNullable: true,
      }),
    })
  }
}
