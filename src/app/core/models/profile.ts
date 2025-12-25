import { FormControl, FormGroup } from '@angular/forms'

export interface ProfileFormControl {
  avatar: FormControl<string | null>
  email: FormControl<string>
  firstName: FormControl<string>
  lastName: FormControl<string>
  birthday: FormControl<Date | null>
  phone: FormControl<string>
  hobbies: FormControl<string[]>
}
export type ProfileFormValue = FormGroup<ProfileFormControl>['value']
export type ProfilePayload = Required<ProfileFormValue> & { birthday: Date }

export interface Profile extends ProfileFormValue {
  id: number
  birthday: Date
}
