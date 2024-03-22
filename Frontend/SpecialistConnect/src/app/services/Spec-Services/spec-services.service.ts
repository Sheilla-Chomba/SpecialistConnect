import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { specRegister, specsDetails } from '../../interfaces/spec';
import { AuthServiceService } from '../Auth-Services/auth-service.service';
import { specOrders } from '../../interfaces/orders';

@Injectable({
  providedIn: 'root',
})
export class SpecServicesService {
  user_id!: string;
  token!: string;

  constructor(private http: HttpClient,private authApi:AuthServiceService) {
    this.getUserId()
  }

  registerSpec(specData:specRegister){
    let spec_id=this.user_id
    
    return this.http.post<{message:string, error:string}>(`http://localhost:4100/spec/${spec_id}`,specData)
  }

  getToken() {
    this.token = localStorage.getItem('SpecilistConnect_token') as string;
    return this.token;
  }
  getUserId(){
    this.authApi.readToken(this.getToken()).subscribe((response) => {
      this.user_id = response.info.user_id;
      
      console.log( this.user_id);
      return this.user_id
       
    });
  }
  getOneSpecDetails(){
    let spec_id = this.user_id
    // console.log(spec_id);
    
    return this.http.get<{spec:specRegister[]}>(`http://localhost:4100/spec/${spec_id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
  }

  updateSpec(specUpdate:specRegister){
    let spec_id = this.user_id

    return this.http.put<{message:string, error:string}>(`http://localhost:4100/spec/update/${spec_id}`, specUpdate)
  }

  getSpecOrders(){
    let spec_id = this.user_id;

    return this.http.get<{spec_orders:specOrders[], error: string}>(`http://localhost:4100/order/spec/${spec_id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
  }
  getSpecs(){
    return this.http.get<{specs:specsDetails[], error: string}>(`http://localhost:4100/spec`,{
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
  }
}


