import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagingService } from './messaging.service';
import { environment } from '../environments/environment';
import {PrimeNgReqModules} from './ngprime-module'

import { MapContainerComponent } from './map-container/map-container.component';
import { AgmCoreModule } from '@agm/core';
import { RegisterComponent } from './restaurant/register/register.component';
import { RestaurantLoginComponent } from './restaurant/restaurant-login/restaurant-login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DashboardComponent } from './restaurant/dashboard/dashboard.component';
import { OverviewCardComponent } from './restaurant/overview-card/overview-card.component';
import { HotelPopularListComponent } from './restaurant/hotel-popular-list/hotel-popular-list.component';
import { NavSidebarComponent } from './restaurant/nav-sidebar/nav-sidebar.component';
import { NavbarComponent } from './restaurant/navbar/navbar.component';
import { ResOrderTakingComponent } from './restaurant/res-order-taking/res-order-taking.component';
import { ResOrderListComponent } from './restaurant/res-order-list/res-order-list.component';
import { ResItemManagementComponent } from './restaurant/res-item-management/res-item-management.component';
import { ResItemTableManagementComponent } from './restaurant/res-item-table-management/res-item-table-management.component';
import { PromationComponent } from './restaurant/promation/promation.component';
@NgModule({
  declarations: [
    AppComponent,
    MapContainerComponent,
    RegisterComponent,
    RestaurantLoginComponent,
    RestaurantComponent,
    DashboardComponent,
    OverviewCardComponent,
    HotelPopularListComponent,
    NavSidebarComponent,
    NavbarComponent,
    ResOrderTakingComponent,
    ResOrderListComponent,
    ResItemManagementComponent,
    ResItemTableManagementComponent,
    PromationComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbYDLRgyocgh9DrfX9YyQv4ClEggFbNLE'
    }),
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    PrimeNgReqModules,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
