import { Component, input } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { FloatLabel } from 'primeng/floatlabel'
import { InputNumberModule } from 'primeng/inputnumber'
import { MessageModule } from 'primeng/message'

import { ErrorField } from '../error-field/error-field'

@Component({
  selector: 'app-input-number-form',
  imports: [ReactiveFormsModule, InputNumberModule, FloatLabel, MessageModule, ErrorField],
  templateUrl: './input-number-form.html',
  styleUrl: './input-number-form.scss',
})
export class InputNumberForm {
  control = input.required<FormControl<number | null>>()
  id = input('')
  label = input('')
  readonly = input(false)
  errorMessage = input<Record<string, unknown>>({})
  mode = input<'decimal' | 'currency'>('decimal')
  locale = input<string | null>(null)
  min = input<number | null>(null)
  max = input<number | null>(null)
  minlength = input<number | null>(null)
  maxlength = input<number | null>(null)
  currency = input<string | undefined>(undefined)
  minFractionDigits = input<number | null>(null)
  maxFractionDigits = input<number | null>(null)
  size = input<'small' | 'large'>('large')
  variant = input<'outlined' | 'filled' | undefined>(undefined)
}
