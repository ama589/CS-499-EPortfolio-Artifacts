import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'http://localhost:3000/api/tasks';
  
  constructor(private httpClient: HttpClient) { }


  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(
      `${this.url}`
    );
  }
  
  createTask(task: any): Observable<Task>{
   // console.log(contact);
    return this.httpClient.post<Task>(
      `${this.url}`, task);
  }

  deleteTask(taskID: any): Observable<Task>{
    return this.httpClient.delete<Task>(
      `${this.url}?id=${taskID}`);
  }
  


  

  
}
