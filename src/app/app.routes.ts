import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: PagesComponent,
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '404',
    loadChildren: './404/not-found.module#NotFoundModule'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/404'
  }
];

export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES, { useHash: true });
