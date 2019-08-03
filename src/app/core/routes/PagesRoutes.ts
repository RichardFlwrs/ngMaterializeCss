import { Routes, Route } from '@angular/router';

export class PagesRoutes {
  public routes = {
    home: new RouteClass({
      path: 'home',
      loadChildren: './home/home.module#HomeModule',
      title: 'Home'
    })
  };

  public get allRoutes(): RouteInterface[] {
    return [this.routes.home.props];
  }

  // ngRoutes
  public get ngRoutes(): Routes {
    return [this.routes.home.ngRoute];
  }
}

// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //

class RouteClass implements RouteInterface {
  constructor(entry: RouteInterface) {
    this.path = entry.path;
    this.loadChildren = entry.loadChildren;
    this.title = entry.title;
  }

  public title: string;
  public path: string;
  public loadChildren: string;

  public get ngRoute(): Route {
    return {
      path: this.path,
      loadChildren: this.loadChildren
    };
  }

  public get props(): RouteInterface {
    return {
      path: this.path,
      loadChildren: this.loadChildren,
      title: this.title
    };
  }
}

// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //

interface RouteInterface {
  title: string;
  path: string;
  loadChildren: string;
}
