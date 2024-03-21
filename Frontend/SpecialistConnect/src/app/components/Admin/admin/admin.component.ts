import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../../services/Auth-Services/auth-service.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  email!: string;
  token!: string;

  constructor(private route: Router, private api: AuthServiceService) {
    this.getEmail()
  }

  getToken(){
    this.token = localStorage.getItem('SpecilistConnect_token') as string;
    return this.token
  }

  showModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.add('modal-bg-active');
  }
  closeModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.remove('modal-bg-active');
  }

  logout() {
    localStorage.removeItem('SpecilistConnect_token');
    this.route.navigate(['/login']);
  }
  getEmail() {
   this.api.readToken(this.getToken()).subscribe((response) => {
      console.log(response);
      this.email = response.info.email;
    });
  }
}
