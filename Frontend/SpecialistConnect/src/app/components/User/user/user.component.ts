import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../../services/Auth-Services/auth-service.service';
import { SearchPipe } from '../../../pipes/Search-specs/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, SearchPipe, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  email!: string;
  token!: string;
  filter = '';

  constructor(private route: Router, private api: AuthServiceService) {
    this.getEmail();
  }

  showModalMenu() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.add('modal-bg-active');
  }
  closeModalMenu() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.remove('modal-bg-active');
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }
  getToken() {
    this.token = localStorage.getItem('SpecilistConnect_token') as string;
    return this.token;
  }
  getEmail() {
    this.api.readToken(this.getToken()).subscribe((response) => {
      console.log(response);
      this.email = response.info.email;
    });
  }
}
