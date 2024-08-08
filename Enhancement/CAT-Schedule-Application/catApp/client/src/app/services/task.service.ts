import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'http://localhost:3000/api';
  
  constructor(private httpClient: HttpClient) { }


  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(
      `${this.url}/tasks`
    );
  }
  
  createTask(task: Task){
    return this.httpClient.post(`${this.url}/SaveTask`, task)
  }

  
}
