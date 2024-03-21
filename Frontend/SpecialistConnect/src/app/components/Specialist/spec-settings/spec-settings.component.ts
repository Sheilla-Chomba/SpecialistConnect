import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../services/User-Service/user-service.service';
import { AuthServiceService } from '../../../services/Auth-Services/auth-service.service';
import { SpecServicesService } from '../../../services/Spec-Services/spec-services.service';

@Component({
  selector: 'app-spec-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './spec-settings.component.html',
  styleUrl: './spec-settings.component.css',
})
export class SpecSettingsComponent {
  settingsForm!: FormGroup;
  bioSettingsForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;

  img_src:string ="../../../../assets/icon-1633249_1280.png"

  constructor(
    private fb: FormBuilder,
    private route: Router,
    public api: UserServiceService,
    public authApi: AuthServiceService,
    public specApi:SpecServicesService
  ) {
    this.settingsForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        pwd: ['', [Validators.required, Validators.minLength(6)]],
        confirmPwd: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validator: this.passwordMatchValidator }
    );
    this.bioSettingsForm = this.fb.group({
      j_title: ['', [Validators.required]],
      j_desc: ['', [Validators.required]],
      j_loc: ['', [Validators.required]],
      j_rates: ['', [Validators.required]],
    });
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

  pwdSettings() {
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

  bioSettings(){
    let bio = {
      job_title: this.bioSettingsForm.value.j_title,
      spec_loc: this.bioSettingsForm.value.j_loc,
      spec_desc: this.bioSettingsForm.value.j_desc,
      ratings: this.bioSettingsForm.value.j_rates,
      prof_image: this.img_src,
    };
    
    this.specApi.updateSpec(bio).subscribe((response) => {
      console.log(response);
    })
    this.successMessage = 'Spec Updated successful';
    this.showSuccessMessage = true;
    this.bioSettingsForm.reset();

    setTimeout(() => {
      this.showSuccessMessage = false;
      this.route.navigate(['spec/dashboard']);
    }, 2000);
  }
  
}
