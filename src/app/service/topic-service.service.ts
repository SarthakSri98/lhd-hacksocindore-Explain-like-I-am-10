import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {
  topicArray=[];
  constructor(private http:HttpClient) { }

  getTopics()
  {
     return this.http.get<{ error:string , data:{}  }>('http://localhost:8000/home/list');
  }

  postTopic(data)
  {
    return this.http.post<{ message:string , data:{} }>('http://localhost:8000/home/newTopic',data,
  //   {
  //     headers: new HttpHeaders().set('Content-Type', 'application/json'),
  //     responseType: 'json' 
  //  }
   );
  }
}
