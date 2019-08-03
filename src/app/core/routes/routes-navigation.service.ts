import { Injectable } from '@angular/core';
import { PagesRoutes } from './PagesRoutes';

@Injectable({
  providedIn: 'root'
})
export class RoutesNavigationService {
  public pagesRoutes = new PagesRoutes();
}
