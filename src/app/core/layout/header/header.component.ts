import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const elems = document.querySelectorAll('.sidenav');

    console.log(elems);

    const options = {};
    const instances = M.Sidenav.init(elems, options);
  }
}
