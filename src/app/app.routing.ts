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
import { RegistermotherComponent } from './registermother/registermother.component';
import { RegisterchildComponent } from './registerchild/registerchild.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'immunization',   component: ImmunizationComponent },
    { path: 'registration',   component: RegistrationComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'campaign',        component: CampaignComponent },
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
