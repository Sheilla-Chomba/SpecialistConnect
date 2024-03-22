import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createOrder } from '../../interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  constructor(private http:HttpClient) { }
  
  // This create Orders
   createOrder(orderData:createOrder){
    return this.http.post<{message:string, error:string}>(`http://localhost:4100/order`,orderData)
  }
}
