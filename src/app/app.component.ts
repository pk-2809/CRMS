import { Component } from '@angular/core';
import { PlatformLocation } from "@angular/common";
import { NavigationEnd, Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CRMS';
  isLogin = false;
  constructor(private platlocation: PlatformLocation, public router: Router) {
   }
  ngOnInit(): void {
    let routeParams: string;
    this.router.events.subscribe(routeEvent => {
      if (!(routeEvent instanceof NavigationEnd)) {
        return;
      }
      const params = routeEvent.url.split("?")[1];
      this.modifyHeader(routeEvent.url)
      if (params) {
        routeParams = params;
        window.history.replaceState(
          {},
          "",
          `${location.pathname}?${routeParams}`
        );
      }
    });

  }
  modifyHeader(location: any)
  {
    if (location === '/login' || location === '/' ) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  }

  }