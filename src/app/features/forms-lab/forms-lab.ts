import { Component } from '@angular/core'

import { ProfileForm } from './components/profile-form/profile-form'

@Component({
  selector: 'app-forms-lab',
  imports: [ProfileForm],
  templateUrl: './forms-lab.html',
  styleUrl: './forms-lab.scss',
})
export class FormsLab {}
