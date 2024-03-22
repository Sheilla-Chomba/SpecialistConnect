import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userRegister, users } from '../../interfaces/user';
import { pwdReset } from '../../interfaces/resetPwd';
import { AuthServiceService } from '../Auth-Services/auth-service.service';
import { userOrders } from '../../interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user_id!: string;
  token!: string;

  constructor(private http:HttpClient,private authApi:AuthServiceService) {
    this.getUserId()
  }
  
  // This registers both the User and Specialist
   registerUser(userData:userRegister){
    return this.http.post<{message:string, error:string}>(`http://localhost:4100/users`,userData)
  }

  //This gets all Users in the database
  getUsers(){
    return this.http.get<{users:users[], error: string}>('http://localhost:4100/users', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
  }

  //Password Reset
  passwordReset(newPassword:pwdReset){
    interface passwordReset {
      message: string,
      error: string
    }
    return this.http.put<passwordReset>('http://localhost:4100/auth/reset_pwd' ,newPassword)
  };

  getUserOrders(){
    let user_id = this.user_id;

    return this.http.get<{user_orders:userOrders[], error: string}>(`http://localhost:4100/order/user/${user_id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
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
}
