import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../services/User-Service/user-service.service';

@Component({
  selector: 'app-spec-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './spec-settings.component.html',
  styleUrl: './spec-settings.component.css',
})
export class SpecSettingsComponent {
  settingsForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    public api: UserServiceService
  ) {
    this.settingsForm = this.fb.group(
      {
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

  settings() {
    let newPassword = {
      email: this.settingsForm.value.email,
      password: this.settingsForm.value.pwd,
    };
    this.api.passwordReset(newPassword).subscribe((response) => {
      console.log(response.message);

      setTimeout(() => {
        this.settingsForm.reset();
        this.route.navigate(['/login']);
      }, 3000);
    });
  }
}
