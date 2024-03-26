import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SpecServicesService } from '../../../services/Spec-Services/spec-services.service';
import { specsDetails } from '../../../interfaces/spec';
import { CommonModule } from '@angular/common';
import { ReviewsServicesService } from '../../../services/Reviews-Services/reviews-services.service';
import { specReviews } from '../../../interfaces/reviews';

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
  reviewDetails:specReviews[]=[]

  constructor(private api:SpecServicesService, private active_route:ActivatedRoute,private route:Router,private rev_api:ReviewsServicesService){
    this.active_route.params.subscribe((params) => {
      this.spec_id = params['spec_id'];
      console.log('spec_id:', this.spec_id);
    })

    this.api.getOneSpecDetailsUserDash(this.spec_id).subscribe(res => {
        this.specDetails = res.spec;
        console.log('One Specialist Details:', this.specDetails);
      });

    this.rev_api.getOneSpecReviews(this.spec_id).subscribe((res) => {
      this.reviewDetails = res.reviews;
      console.log('Reviews Details:', this.reviewDetails);
    });
  }
  giveSpecOrder(spec_id:string){
     this.route.navigate(['/user/give-order/', spec_id]);
  }
}
