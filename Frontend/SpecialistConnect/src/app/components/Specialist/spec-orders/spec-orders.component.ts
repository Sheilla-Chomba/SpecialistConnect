import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { specOrders } from '../../../interfaces/orders';
import { SpecServicesService } from '../../../services/Spec-Services/spec-services.service';
import { FormsModule } from '@angular/forms';
import { FilterStatusPipe } from '../../../pipes/FilterStatus/filter-status.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spec-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterStatusPipe],
  templateUrl: './spec-orders.component.html',
  styleUrl: './spec-orders.component.css',
})
export class SpecOrdersComponent {
  orders: specOrders[] = [];
  filt = '';

  constructor(private api: SpecServicesService, private route: Router) {
    this.fetchSpecOrders();
  }

  fetchSpecOrders() {
    this.api.getSpecOrders().subscribe((res) => {
      console.log(res);

      this.orders = res.spec_orders;
    });
  }
  changeStatus(order_id: string) {
    this.route.navigate(['/spec/update-order/', order_id]);
  }
}
