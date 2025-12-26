import { Component, input } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { DatePickerModule } from 'primeng/datepicker'
import { FloatLabel } from 'primeng/floatlabel'
import { MessageModule } from 'primeng/message'

import { ErrorField } from '../error-field/error-field'

@Component({
  selector: 'app-input-date-form',
  imports: [ReactiveFormsModule, DatePickerModule, FloatLabel, MessageModule, ErrorField],
  templateUrl: './input-date-form.html',
  styleUrl: './input-date-form.scss',
})
export class InputDateForm {
  control = input.required<FormControl<Date | null>>()
  id = input('')
  label = input('')
  readonly = input(false)
  errorMessage = input<Record<string, unknown>>({})
  min = input<number | null>(null)
  max = input<number | null>(null)
  minlength = input<number | null>(null)
  maxlength = input<number | null>(null)
  size = input<'small' | 'large'>('large')
  variant = input<'outlined' | 'filled' | undefined>(undefined)
}
