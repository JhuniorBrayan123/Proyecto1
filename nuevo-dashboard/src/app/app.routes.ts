import { Routes } from '@angular/router';
import { Services } from './shared/services/services';

export const routes: Routes = [
  { path: 'services', component: Services },
  { path: '', redirectTo: 'services', pathMatch: 'full' },
];
