import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userRegister, users } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  
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
}
