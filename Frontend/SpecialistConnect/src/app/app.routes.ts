import { Routes } from '@angular/router';
import { LoginComponent } from './components/Shared Stuff/login/login.component';
import { SpecRegisterComponent } from './components/Specialist/spec-register/spec-register.component';
import { UserRegisterComponent } from './components/User/user-register/user-register.component';
import { NotFoundComponent } from './components/Shared Stuff/not-found/not-found.component';
import { LandingComponent } from './components/Shared Stuff/landing/landing.component';
import { RegisterAsComponent } from './components/Shared Stuff/register-as/register-as.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-as', component:RegisterAsComponent},
  { path: 'register-spec', component: SpecRegisterComponent },
  { path: 'register-user', component: UserRegisterComponent },
  { path: '**', component: NotFoundComponent },
];
