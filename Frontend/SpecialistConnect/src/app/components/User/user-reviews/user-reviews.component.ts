import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../../services/Auth-Services/auth-service.service';
import { ReviewsServicesService } from '../../../services/Reviews-Services/reviews-services.service';

@Component({
  selector: 'app-user-reviews',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-reviews.component.html',
  styleUrl: './user-reviews.component.css',
})
export class UserReviewsComponent {
  reviewForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;

  order_id!: string;
  // token!: string;

  constructor(
    private route: Router,
    private api: ReviewsServicesService,
    private fb: FormBuilder,
    private active_route: ActivatedRoute,
    private authApi: AuthServiceService
  ) {
    this.reviewForm = this.fb.group({
      review_desc: ['', [Validators.required]],
    });
    this.active_route.params.subscribe((params) => {
      this.order_id = params['order_id'];
      console.log('order_id:', this.order_id);
    });
    // this.getUserId();
  }

  // getToken() {
  //   this.token = localStorage.getItem('SpecilistConnect_token') as string;
  //   return this.token;
  // }
  // getUserId() {
  //   this.authApi.readToken(this.getToken()).subscribe((response) => {
  //     this.user_id = response.info.user_id;

  //     console.log(this.user_id);
  //     return this.user_id;
  //   });
  // }

  review() {
    if (this.reviewForm.valid) {
      let reviewDetails = {
        order_id: this.order_id,
        review_desc: this.reviewForm.value.review_desc,
      };

      this.api.createReview(reviewDetails).subscribe((response) => {
        console.log(response);
      });

      this.successMessage = 'Review created successful';
      this.showSuccessMessage = true;
      this.reviewForm.reset();

      setTimeout(() => {
        this.showSuccessMessage = false;
        this.route.navigate(['user/dashboard']);
      }, 2000);
    }
  }
}
