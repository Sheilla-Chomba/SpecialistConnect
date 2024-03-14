import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-spec',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './spec.component.html',
  styleUrl: './spec.component.css',
})
export class SpecComponent {
  showModalMenuSpec() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.add('modal-bg-active');
  }
  closeModalMenuSpec() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.remove('modal-bg-active');
  }
}
