import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'SIDEBAR.DASHBOARD',  icon: 'dashboard', class: '' },
    { path: 'registration', title: 'SIDEBAR.REGISTRATION',  icon: 'edit', class: '' },
    { path: 'immunization', title: 'SIDEBAR.IMMUNIZATION',  icon: 'child_care', class: '' },
    { path: 'user-profile', title: 'SIDEBAR.USER_PROFILE',  icon:'person', class: '' },
    { path: 'campaign' ,  title: 'SIDEBAR.CAMPAIGN' , icon:'event' , class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
//   template: `
//   <h4>{{ 'MAIN.TITLE' | translate }}</h4>
// `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "hi"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
