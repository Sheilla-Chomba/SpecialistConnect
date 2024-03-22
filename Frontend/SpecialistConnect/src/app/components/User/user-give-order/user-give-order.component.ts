import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServicesService } from '../../../services/Order-Services/order-services.service';
import { AuthServiceService } from '../../../services/Auth-Services/auth-service.service';

@Component({
  selector: 'app-user-give-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-give-order.component.html',
  styleUrl: './user-give-order.component.css',
})
export class UserGiveOrderComponent {
  orderForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;
  spec_id!: string;
  user_id!: string;
  token!: string;

  constructor(
    private route: Router,
    private api: OrderServicesService,
    private fb: FormBuilder,
    private active_route: ActivatedRoute,
    private authApi:AuthServiceService
  ) {
    this.orderForm = this.fb.group({
      order_desc: ['', [Validators.required]],
    });
    this.active_route.params.subscribe((params) => {
      this.spec_id = params['spec_id'];
      console.log('spec_id:', this.spec_id);
    });
    this.getUserId();
  }

  getToken() {
    this.token = localStorage.getItem('SpecilistConnect_token') as string;
    return this.token;
  }
  getUserId() {
    this.authApi.readToken(this.getToken()).subscribe((response) => {
      this.user_id = response.info.user_id;

      console.log(this.user_id);
      return this.user_id;
    });
  }

  order() {
    if (this.orderForm.valid) {
      let orderDetails = {
        spec_id: this.spec_id,
        user_id: this.user_id,
        order_desc: this.orderForm.value.order_desc,
      };

      this.api.createOrder(orderDetails).subscribe((response) => {
        console.log(response);
      });

      this.successMessage = 'Order created successful';
      this.showSuccessMessage = true;
      this.orderForm.reset();

      setTimeout(() => {
        this.showSuccessMessage = false;
        this.route.navigate(['user/dashboard']);
      }, 2000);
    }
  }
}
