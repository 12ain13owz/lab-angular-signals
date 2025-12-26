import { Component, computed, input } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { FloatLabel } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext'
import { MessageModule } from 'primeng/message'

import { HTMLInputType } from '../../../../core/models/generic-model'
import { ErrorField } from '../error-field/error-field'

@Component({
  selector: 'app-input-text-form',
  imports: [ReactiveFormsModule, InputTextModule, FloatLabel, MessageModule, ErrorField],
  templateUrl: './input-text-form.html',
  styleUrl: './input-text-form.scss',
})
export class InputTextForm {
  control = input.required<FormControl<string | null>>()
  type = input<HTMLInputType>('text')
  id = input('')
  label = input('')
  readonly = input(false)
  errorMessage = input<Record<string, unknown>>({})
  size = input<'small' | 'large'>('large')
  variant = input<'outlined' | 'filled' | undefined>(undefined)

  isEmailType = computed(() => this.type() === 'email')

  onEmailBlur(): void {
    if (!this.isEmailType()) return

    const control = this.control()
    const currentValue = control.value

    if (!currentValue || typeof currentValue !== 'string') return

    const normalizedEmail = currentValue.toLowerCase().trim()
    if (normalizedEmail !== currentValue) control.setValue(normalizedEmail, { emitEvent: false })
  }
}
