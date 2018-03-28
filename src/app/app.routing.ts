import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ImmunizationComponent } from './immunization/immunization.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { RegistrationComponent } from './registration/registration.component';
import { CampaignComponent  } from './campaign/campaign.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { RegistermotherComponent } from './registermother/registermother.component';
import { RegisterchildComponent } from './registerchild/registerchild.component';


const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },

    { path: 'immunization',   component: ImmunizationComponent },
    { path: 'registration',   component: RegistrationComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'campaign',        component: CampaignComponent },

    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
