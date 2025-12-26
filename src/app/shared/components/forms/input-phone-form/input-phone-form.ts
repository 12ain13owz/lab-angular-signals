import { Component, input } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { FloatLabel } from 'primeng/floatlabel'
import { InputMaskModule } from 'primeng/inputmask'
import { MessageModule } from 'primeng/message'

import { ErrorField } from '../error-field/error-field'

@Component({
  selector: 'app-input-phone-form',
  imports: [ReactiveFormsModule, InputMaskModule, FloatLabel, MessageModule, ErrorField],
  templateUrl: './input-phone-form.html',
  styleUrl: './input-phone-form.scss',
})
export class InputPhoneForm {
  control = input.required<FormControl<string | null>>()
  id = input('')
  label = input('')
  readonly = input(false)
  errorMessage = input<Record<string, unknown>>({})
  mask = input<string | null>('999-999-9999')
  size = input<'small' | 'large'>('large')
  variant = input<'outlined' | 'filled' | undefined>(undefined)
}
