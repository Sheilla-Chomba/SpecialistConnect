import { Pipe, PipeTransform } from '@angular/core';
import { userOrders } from '../../interfaces/orders';

@Pipe({
  name: 'filterRoleUser',
  standalone: true,
})
export class FilterRoleUserPipe implements PipeTransform {
  transform(orders: userOrders[], name: string): userOrders[] {
    if (!orders || name == '') {
      return orders;
    }

    const filtered: userOrders[] = [];

    for (let order of orders) {
      if (order.status.toLowerCase().includes(name.toLowerCase())) {
        filtered.push(order);
      }
    }

    return filtered;
  }
}
