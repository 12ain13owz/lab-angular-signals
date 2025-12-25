import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
    children: [
      { path: '', redirectTo: 'counters', pathMatch: 'full' },
      {
        path: 'counters',
        loadComponent: () => import('./features/counters/counters').then((m) => m.Counters),
      },
      {
        path: 'forms',
        loadComponent: () => import('./features/forms-lab/forms-lab').then((m) => m.FormsLab),
      },
      {
        path: 'dom',
        loadComponent: () => import('./features/dom-access/dom-access').then((m) => m.DomAccess),
      },
    ],
  },
]
