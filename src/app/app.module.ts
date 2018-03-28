import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
=======

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

>>>>>>> 30bdbec02cb12712cdc8c7b4ef7a86e4dd7d4300
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
<<<<<<< HEAD
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ImmunizationComponent } from './immunization/immunization.component';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import { DatepickerModule } from 'angular2-material-datepicker';
import { CollapsibleModule } from 'angular2-collapsible';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchImmunizeService } from './search-immunize.service';
import { CampaignComponent } from './campaign/campaign.component'


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "../assets/i18n/", ".json");
}
=======
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
>>>>>>> 30bdbec02cb12712cdc8c7b4ef7a86e4dd7d4300

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
<<<<<<< HEAD
    UpgradeComponent,
    ImmunizationComponent,
    RegistrationComponent,
    CampaignComponent,
=======
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,

>>>>>>> 30bdbec02cb12712cdc8c7b4ef7a86e4dd7d4300
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
<<<<<<< HEAD
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DatepickerModule,
    MatCheckboxModule,
    CollapsibleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ SearchImmunizeService ],
=======
RouterModule,
    AppRoutingModule
  ],
  providers: [],
>>>>>>> 30bdbec02cb12712cdc8c7b4ef7a86e4dd7d4300
  bootstrap: [AppComponent]
})
export class AppModule { }
