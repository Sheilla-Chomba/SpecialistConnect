import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createReview, specReviews } from '../../interfaces/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsServicesService {

  constructor(private http:HttpClient) { }
  
  // This create Reviews
   createReview(reviewData:createReview){
    return this.http.post<{message:string, error:string}>(`http://localhost:4100/review`,reviewData)
  }

  getOneSpecReviews(spec_id:string){
    return this.http.get<{reviews:specReviews[]}>(`http://localhost:4100/review/spec/${spec_id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    })
  }
}
