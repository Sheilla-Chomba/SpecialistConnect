import { Routes } from '@angular/router';
import { LoginComponent } from './components/Shared Stuff/login/login.component';
import { SpecRegisterComponent } from './components/Specialist/spec-register/spec-register.component';
import { UserRegisterComponent } from './components/User/user-register/user-register.component';
import { NotFoundComponent } from './components/Shared Stuff/not-found/not-found.component';
import { LandingComponent } from './components/Shared Stuff/landing/landing.component';
import { RegisterAsComponent } from './components/Shared Stuff/register-as/register-as.component';
import { UserComponent } from './components/User/user/user.component';
import { AdminComponent } from './components/Admin/admin/admin.component';
import { SpecComponent } from './components/Specialist/spec/spec.component';
import { UserSettingsComponent } from './components/User/user-settings/user-settings.component';
import { AdminSettingsComponent } from './components/Admin/admin-settings/admin-settings.component';
import { AdminViewUsersComponent } from './components/Admin/admin-view-users/admin-view-users.component';
import { UserReviewsComponent } from './components/User/user-reviews/user-reviews.component';
import { UserOrdersComponent } from './components/User/user-orders/user-orders.component';
import { SpecOrdersComponent } from './components/Specialist/spec-orders/spec-orders.component';
import { SpecSettingsComponent } from './components/Specialist/spec-settings/spec-settings.component';
import { UserDashboardComponent } from './components/User/user-dashboard/user-dashboard.component';
import { UserGiveOrderComponent } from './components/User/user-give-order/user-give-order.component';
import { UserViewSpecComponent } from './components/User/user-view-spec/user-view-spec.component';
import { SpecUpdateOrderComponent } from './components/Specialist/spec-update-order/spec-update-order.component';
import { UserChangeStatusComponent } from './components/User/user-change-status/user-change-status.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-as', component: RegisterAsComponent },
  { path: 'register-spec', component: SpecRegisterComponent },
  { path: 'register-user', component: UserRegisterComponent },
  { path: 'admin', component: AdminComponent,
  children:[
    {path: 'settings', component: AdminSettingsComponent},
    {path: 'dashboard', component: AdminViewUsersComponent},
  ]
},
  { path: 'user', component: UserComponent,
  children:[
    {path: 'dashboard', component: UserDashboardComponent},
    {path: 'settings', component: UserSettingsComponent},
    {path: 'orders', component: UserOrdersComponent},
    {path: 'reviews/:order_id', component: UserReviewsComponent},
    {path: 'give-order/:spec_id', component: UserGiveOrderComponent},
    {path: 'view-spec/:spec_id', component: UserViewSpecComponent},
    {path:"update-order/:order_id", component:UserChangeStatusComponent}
  ]
},
  { path: 'spec', component: SpecComponent,
  children:[
    {path: 'dashboard', component: SpecOrdersComponent},
    {path: 'settings', component: SpecSettingsComponent},
    {path:"update-order/:order_id", component:SpecUpdateOrderComponent}
  ]
},
  { path: '**', component: NotFoundComponent },
];
