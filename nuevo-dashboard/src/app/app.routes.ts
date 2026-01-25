import { Routes } from '@angular/router';
import { Services } from './shared/services/services';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./business/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'profile',
        loadComponent: () => import('./business/profile/profile').then(m => m.Profile),
      },
      {
        path: 'tables',
        loadComponent: () => import('./business/tables/tables').then(m => m.Tables),
      },
    ],
  },
];
