import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

import { Footer } from '../../shared/components/ui/footer/footer'
import { Toolbar } from '../../shared/components/ui/toolbar/toolbar'

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, Toolbar, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
