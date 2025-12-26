import { FormControl, FormGroup } from '@angular/forms'

export interface ProfileFormControl {
  email: FormControl<string>
  firstName: FormControl<string>
  lastName: FormControl<string>
  birthDay: FormControl<Date | null>
  phone: FormControl<string>
}
export type ProfileFormValue = Required<FormGroup<ProfileFormControl>['value']>
export type ProfilePayload = Required<ProfileFormValue> & { birthDay: Date }

export interface Profile extends ProfileFormValue {
  id: number
  birthDay: Date
}
