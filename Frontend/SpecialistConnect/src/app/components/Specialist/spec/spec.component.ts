import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-spec',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './spec.component.html',
  styleUrl: './spec.component.css',
})
export class SpecComponent {
  constructor(private route: Router) {}
  showModalMenuSpec() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.add('modal-bg-active');
  }
  closeModalMenuSpec() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.remove('modal-bg-active');
  }

  logout() {
    localStorage.removeItem('SpecilistConnect_token');
    this.route.navigate(['/login']);
  }
}
