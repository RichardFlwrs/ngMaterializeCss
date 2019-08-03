import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  }
];

export const PagesRoutesModule = RouterModule.forChild(routes);
