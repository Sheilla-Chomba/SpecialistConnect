import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userRegister } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
   registerUser(userData:userRegister){
    return this.http.post<{message:string, error:string}>(`http://localhost:4100/users`,userData)
  }
}
