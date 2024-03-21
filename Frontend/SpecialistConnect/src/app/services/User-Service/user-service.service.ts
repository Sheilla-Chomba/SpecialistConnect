import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userRegister, users } from '../../interfaces/user';
import { pwdReset } from '../../interfaces/resetPwd';

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

  //Password Reset
  passwordReset(newPassword:pwdReset){
    interface passwordReset {
      message: string,
      error: string
    }
    return this.http.put<passwordReset>('http://localhost:4100/auth/reset_pwd' ,newPassword)
  };
}
