import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpecServicesService } from '../../../services/Spec-Services/spec-services.service';
import { specsDetails } from '../../../interfaces/spec';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-view-spec',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './user-view-spec.component.html',
  styleUrl: './user-view-spec.component.css'
})
export class UserViewSpecComponent {
  spec_id!:string
  specDetails:specsDetails[]=[];

  constructor(private api:SpecServicesService, private active_route:ActivatedRoute){
    this.active_route.params.subscribe((params) => {
      this.spec_id = params['spec_id'];
      console.log('spec_id:', this.spec_id);
    })

    this.api.getOneSpecDetailsUserDash(this.spec_id).subscribe(res => {
        this.specDetails = res.spec;
        console.log('One Specialist Details:', this.specDetails);
      });
  }
}
