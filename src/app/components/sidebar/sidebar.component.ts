import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {TranslateService} from '@ngx-translate/core';
=======
>>>>>>> 30bdbec02cb12712cdc8c7b4ef7a86e4dd7d4300

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
<<<<<<< HEAD
    { path: 'dashboard', title: 'SIDEBAR.DASHBOARD',  icon: 'dashboard', class: '' },
    { path: 'registration', title: 'SIDEBAR.REGISTRATION',  icon: 'edit', class: '' },
    { path: 'immunization', title: 'SIDEBAR.IMMUNIZATION',  icon: 'child_care', class: '' },
    { path: 'user-profile', title: 'SIDEBAR.USER_PROFILE',  icon:'person', class: '' },
    { path: 'campaign' ,  title: 'SIDEBAR.CAMPAIGN' , icon:'event' , class: '' }
=======
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
>>>>>>> 30bdbec02cb12712cdc8c7b4ef7a86e4dd7d4300
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
<<<<<<< HEAD
//   template: `
//   <h4>{{ 'MAIN.TITLE' | translate }}</h4>
// `,
=======
>>>>>>> 30bdbec02cb12712cdc8c7b4ef7a86e4dd7d4300
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

<<<<<<< HEAD
  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "hi"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
}
=======
  constructor() { }
>>>>>>> 30bdbec02cb12712cdc8c7b4ef7a86e4dd7d4300

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
