import { Routes, RouterModule } from '@angular/router';
import { PagesRoutes } from '../core/routes/PagesRoutes';

const routes: Routes = new PagesRoutes().ngRoutes;

export const PagesRoutesModule = RouterModule.forChild(routes);
