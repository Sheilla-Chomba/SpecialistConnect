import { Routes } from '@angular/router';
import { LoginComponent } from './components/Common/login/login.component';
import { SpecRegisterComponent } from './components/Specialist/spec-register/spec-register.component';
import { UserRegisterComponent } from './components/User/user-register/user-register.component';
import { NotFoundComponent } from './components/Common/not-found/not-found.component';
import { LandingComponent } from './components/Common/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-spec', component: SpecRegisterComponent },
  { path: 'register-user', component:UserRegisterComponent},
  {path:"**",component:NotFoundComponent}
];
