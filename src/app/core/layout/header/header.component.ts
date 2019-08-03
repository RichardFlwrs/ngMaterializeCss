import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PagesRoutes } from '../../routes/PagesRoutes';

declare const M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor() {}

  public routes = new PagesRoutes().allRoutes;

  ngOnInit() {}

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.sidenav');

    console.log(elems);

    const options = {};
    const instances = M.Sidenav.init(elems, options);
  }
}
