import { Routes } from '@angular/router';
import { APP_ROUTES } from './constants/route.constants';
import { BaseLayoutComponent } from './components/base-layout/base-layout';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: APP_ROUTES.HOME,
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: APP_ROUTES.HOME,
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: '',
        redirectTo: APP_ROUTES.HOME,
        pathMatch: 'full',
      },
    ],
  },
];
