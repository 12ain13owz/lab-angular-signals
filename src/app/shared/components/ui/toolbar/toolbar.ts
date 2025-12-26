import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { ToolbarModule } from 'primeng/toolbar'

import { MenuItem } from '../../../../core/models/dashboard-model'

@Component({
  selector: 'app-toolbar',
  imports: [RouterModule, ToolbarModule, ButtonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
  MENU_ITEMS: MenuItem[] = [
    { label: 'Counters', icon: 'pi pi-plus-circle', route: '/counters' },
    { label: 'Forms Lab', icon: 'pi pi-list', route: '/forms' },
    { label: 'DOM Access', icon: 'pi pi-box', route: '/dom' },
  ]
}
