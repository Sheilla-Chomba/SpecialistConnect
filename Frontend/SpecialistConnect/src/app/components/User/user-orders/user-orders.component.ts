import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { userOrders } from '../../../interfaces/orders';
import { UserServiceService } from '../../../services/User-Service/user-service.service';
import { FilterRoleUserPipe } from '../../../pipes/filterStatusUser/filter-role-user.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-orders',
  standalone: true,
  imports: [CommonModule,FilterRoleUserPipe,FormsModule],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css',
})
export class UserOrdersComponent {
  orders: userOrders[] = [];
  filter=""

  constructor(private api: UserServiceService) {
    this.fetchUserOrders();
  }

  fetchUserOrders() {
    this.api.getUserOrders().subscribe((res) => {
      console.log(res);

      this.orders = res.user_orders;
    });
  }
}
