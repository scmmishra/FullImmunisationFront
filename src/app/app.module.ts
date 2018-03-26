import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
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
import { CampaignComponent } from './campaign/campaign.component';
import { RegisterchildComponent } from './registerchild/registerchild.component';
import { RegistermotherComponent } from './registermother/registermother.component'


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "../assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    UpgradeComponent,
    ImmunizationComponent,
    RegistrationComponent,
    CampaignComponent,
    RegisterchildComponent,
    RegistermotherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
