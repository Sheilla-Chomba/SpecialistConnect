import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createReview } from '../../interfaces/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsServicesService {

  constructor(private http:HttpClient) { }
  
  // This create Orders
   createReview(reviewData:createReview){
    return this.http.post<{message:string, error:string}>(`http://localhost:4100/review`,reviewData)
  }
}
