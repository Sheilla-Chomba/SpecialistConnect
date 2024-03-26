import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../../../services/Auth-Services/auth-service.service';
import { OrderServicesService } from '../../../services/Order-Services/order-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { updateOrders } from '../../../interfaces/orders';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-change-status',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-change-status.component.html',
  styleUrl: './user-change-status.component.css',
})
export class UserChangeStatusComponent {
  orderForm!: FormGroup;
  spec_id!: string;
  user_id!: string;
  token!: string;
  successMessage: string = '';
  showSuccessMessage: boolean = false;
  order_id!: string;
  order!: updateOrders;
  order_desc!: string;

  constructor(
    private authApi: AuthServiceService,
    private fb: FormBuilder,
    private order_api: OrderServicesService,
    private route: Router,
    private active_route: ActivatedRoute
  ) {
    (this.orderForm = this.fb.group({
      status: ['', [Validators.required]],
    })),
      this.active_route.params.subscribe((params) => {
        this.order_id = params['order_id'];
        console.log('order_id:', this.order_id);
      }),
      this.getUserId(),
      this.getOrderDetails();
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
  getOrderDetails() {
    this.order_api.getOrders().subscribe((res) => {
      console.log(res);
      this.order = res.orders[0];

      this.orderForm.patchValue({
        status: this.order.status,
      });
      this.order_desc = this.order.order_desc;
    });
  }
  updateOrder() {
    let updateOrder = {
      order_desc: this.order_desc,
      status: this.orderForm.value.status,
    };
    this.order_api
      .updateOrder(updateOrder, this.order_id)
      .subscribe((response) => {
        console.log(response);
      });
    this.successMessage = 'Order Status Updated successful';
    this.showSuccessMessage = true;
    this.orderForm.reset();

    setTimeout(() => {
      this.showSuccessMessage = false;
      this.route.navigate(['user/orders']);
    }, 2000);
  }
}
