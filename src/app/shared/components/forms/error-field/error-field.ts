import { Component, input } from '@angular/core'
import { AbstractControl, FormControl } from '@angular/forms'

import { ValidationPipe } from '../../../pipes/validation-pipe'

@Component({
  selector: 'app-error-field',
  imports: [ValidationPipe],
  templateUrl: './error-field.html',
  styleUrl: './error-field.scss',
})
export class ErrorField {
  control = input<FormControl | AbstractControl>()
  errorMessage = input<Record<string, unknown>>()
}
