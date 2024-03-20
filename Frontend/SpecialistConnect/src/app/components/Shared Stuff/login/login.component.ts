import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../services/Auth-Services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    public api: AuthServiceService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
    });
  }

  saveToken(token: string) {
    localStorage.setItem('SpecilistConnect_token', token);
  }
  login() {
    if (this.loginForm.valid) {
      console.log('Form submitted successfully');
      let userData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.pwd,
      };
      this.api.loginUser(userData).subscribe((res) => {
        if (res.message) {
          this.api.readToken(res.token).subscribe((response) => {
            console.log(response);
            if (response.info.role === 'user') {
              this.route.navigate(['user/dashboard']);
              this.saveToken(res.token);
            } else if (response.info.role === 'spec') {
              this.route.navigate(['spec/dashboard']);
              this.saveToken(res.token);
            } else if (response.info.role === 'admin') {
              this.route.navigate(['admin/dashboard']);
              this.saveToken(res.token);
            }
          });
        } else if (res.error) {
          console.log('Error');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
