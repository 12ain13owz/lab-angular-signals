import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { DividerModule } from 'primeng/divider'

@Component({
  selector: 'app-footer',
  imports: [ButtonModule, DividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear()
}
