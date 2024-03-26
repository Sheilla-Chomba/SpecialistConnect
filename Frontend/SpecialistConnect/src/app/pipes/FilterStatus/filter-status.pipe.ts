import { Pipe, PipeTransform } from '@angular/core';
import { specOrders } from '../../interfaces/orders';

@Pipe({
  name: 'filterStatus',
  standalone: true,
})
export class FilterStatusPipe implements PipeTransform {

  transform(orders: specOrders[], name: string): specOrders[] {
    if (!orders || name == '') {
      return orders;
    }

    const filtered: specOrders[] = [];

    for (let order of orders) {
      if (order.status.toLowerCase().includes(name.toLowerCase())) {
        filtered.push(order);
      }
    }

    return filtered;
  }
}
