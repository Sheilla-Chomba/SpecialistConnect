import { Routes } from '@angular/router';
import { LoginComponent } from './components/Common/login/login.component';
import { SpecRegisterComponent } from './components/Specialist/spec-register/spec-register.component';
import { UserRegisterComponent } from './components/User/user-register/user-register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register-spec', component: SpecRegisterComponent },
  { path: 'register-user', component:UserRegisterComponent},
];
