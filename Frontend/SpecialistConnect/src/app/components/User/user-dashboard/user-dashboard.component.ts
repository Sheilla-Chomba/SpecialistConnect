import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { specsDetails } from '../../../interfaces/spec';
import { SpecServicesService } from '../../../services/Spec-Services/spec-services.service';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../../../pipes/Search-specs/search.pipe';
import { FormsModule } from '@angular/forms';
import { FilterSpecSkillsPipe } from '../../../pipes/FilterSkills/filter-spec-skills.pipe';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, SearchPipe, FormsModule,FilterSpecSkillsPipe],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent {
  specs: specsDetails[] = [];
  filter = '';
  filter2 = '';
  options: string[] = ["UI Designer", "Data Analyst", "Virtual Assistant", "Web Developer", "Digital Marketer"];

  constructor(private api: SpecServicesService, private route: Router) {
    this.fetchSpecs();
  }

  viewSpec(spec_id: string) {
    this.route.navigate(['/user/view-spec/', spec_id]);
  }

  fetchSpecs() {
    this.api.getSpecs().subscribe((res) => {
      console.log(`Resyyyyy${res.specs}`);

      this.specs = res.specs;
      // console.log(`Want to see ${this.specs}`);
    });
  }
}
