import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './restaurant/register/register.component';
import { RestaurantLoginComponent } from './restaurant/restaurant-login/restaurant-login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DashboardComponent } from './restaurant/dashboard/dashboard.component';
import { ResOrderTakingComponent } from './restaurant/res-order-taking/res-order-taking.component';
import { ResItemManagementComponent } from './restaurant/res-item-management/res-item-management.component';
import { PromationComponent } from './restaurant/promation/promation.component';

const routes: Routes = [
  {
    path: '', component: RestaurantComponent, children: [
      { path: 'signup', component: RegisterComponent },
      { path: '', component: DashboardComponent },
      { path: 'login', component: RestaurantLoginComponent },
      { path: 'orders', component: ResOrderTakingComponent },
      {path:'manage-item',component:ResItemManagementComponent},
      // {path:'promo',component:PromationComponent}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
