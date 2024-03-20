import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDetails } from '../../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

  constructor(private http: HttpClient) {}

  loginUser(user_details:loginDetails ){
    return this.http.post<{message:string, token:string, error:string}>('http://localhost:4100/auth/login', user_details)
  }

  readToken(token:string){
    return this.http.get<{info:{user_id:string, f_name:string, l_name:string, email: string, role:string}}>('http://localhost:4100/auth/checkdetails', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': token
      })
    })
  }

}
