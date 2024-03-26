import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../../services/Auth-Services/auth-service.service';
import { SearchPipe } from '../../../pipes/Search-specs/search.pipe';

@Component({
  selector: 'app-spec',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, SearchPipe],
  templateUrl: './spec.component.html',
  styleUrl: './spec.component.css',
})
export class SpecComponent {
  email!: string;
  token!: string;

  constructor(private route: Router, private api: AuthServiceService) {
    this.getEmail();
  }
  showModalMenuSpec() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.add('modal-bg-active');
  }
  closeModalMenuSpec() {
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
