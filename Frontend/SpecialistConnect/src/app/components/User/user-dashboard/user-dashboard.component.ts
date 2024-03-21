import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { specsDetails } from '../../../interfaces/spec';
import { SpecServicesService } from '../../../services/Spec-Services/spec-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent {
  specs: specsDetails[] = [];

  constructor(private api: SpecServicesService) {
    this.fetchSpecs();
  }

  fetchSpecs() {
    this.api.getSpecs().subscribe((res) => {
      console.log(`Resyyyyy${res}`);

      this.specs = res.specMes;
      // console.log(`Want to see ${this.specs}`);
      
    });
  }
}
