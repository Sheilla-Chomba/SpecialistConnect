import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  showModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.add('modal-bg-active');
  }
  closeModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.remove('modal-bg-active');
  }
}
