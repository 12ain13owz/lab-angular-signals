import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { Toolbar } from 'primeng/toolbar'

import { MenuItem } from '../../core/models/dashboard'

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, CardModule, Toolbar, ButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  MENU_ITEMS: MenuItem[] = [
    { label: 'Counters', icon: 'pi pi-plus-circle', route: '/counters' },
    { label: 'Forms Lab', icon: 'pi pi-list', route: '/forms' },
    { label: 'DOM Access', icon: 'pi pi-box', route: '/dom' },
  ]
}
