import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createOrder, updateOrders } from '../../interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  constructor(private http:HttpClient) { }
  
  // This create Orders
   createOrder(orderData:createOrder){
    return this.http.post<{message:string, error:string}>(`http://localhost:4100/order`,orderData)
  }

  updateOrder(orderUpdate:updateOrders,  order_id:string){
  return this.http.put<{message:string, error:string}>(`http://localhost:4100/order/update/${order_id}`, orderUpdate)
  }
  
  getOrders(){
    return this.http.get<{orders:updateOrders[], error: string}>(`http://localhost:4100/order`,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
  }
}
