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

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-as', component: RegisterAsComponent },
  { path: 'register-spec', component: SpecRegisterComponent },
  { path: 'register-user', component: UserRegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent,
  children:[
    {path: 'settings', component: UserSettingsComponent},
  ]
},
  { path: 'spec', component: SpecComponent },
  { path: '**', component: NotFoundComponent },
];
