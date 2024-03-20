import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserServiceService } from '../../../services/User-Service/user-service.service';

@Component({
  selector: 'app-spec-register',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './spec-register.component.html',
  styleUrl: './spec-register.component.css',
})
export class SpecRegisterComponent {
  registerForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    public api: UserServiceService
  ) {
    this.registerForm = this.fb.group(
      {
        fname: ['', [Validators.required]],
        lname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        pwd: ['', [Validators.required, Validators.minLength(6)]],
        confirmPwd: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validator: this.passwordMatchValidator }
    );
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('pwd');
    const confirmPasswordControl = formGroup.get('confirmPwd');

    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ mismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  register() {
    if (this.registerForm.valid) {
      let userData = {
        f_name: this.registerForm.value.fname,
        l_name: this.registerForm.value.lname,
        email: this.registerForm.value.email,
        role: 'spec',
        password: this.registerForm.value.pwd,
      };

      this.api.registerUser(userData).subscribe((response) => {
        console.log(response);
      });

      this.successMessage = 'Signup successful';
      this.showSuccessMessage = true;
      this.registerForm.reset();

      setTimeout(() => {
        this.showSuccessMessage = false;
        this.route.navigate(['login']);
      }, 2000);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
