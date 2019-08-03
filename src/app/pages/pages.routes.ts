import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

export const PagesRoutesModule = RouterModule.forChild(routes);
