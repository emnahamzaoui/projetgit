import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { feedback } from '../models/Feedback';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  listFeedback:feedback[]=[];
  protected readonly BASE_URI=environment.baseUri+"feedback/"
  constructor(private http:HttpClient) { 
  }
  getFeedback(){
   return this.http.get<feedback[]>(this.BASE_URI+"retrieve-all-feedback");
  }
  addFeedback(feedback:feedback){
    return this.http.post(this.BASE_URI+"add-feedback",feedback);
  }
  removeFeedback(idF:number){
    return this.http.delete(this.BASE_URI+"remove-feedback/"+idF);
  }
  updateFeedback(feedback:feedback){
    return this.http.put(this.BASE_URI+"modify-feedback",feedback);
  }
}
