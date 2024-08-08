import { Injectable } from "@angular/core";
import { Task } from "../schemas/tasks.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

 @Injectable({
    providedIn:'root',
 })
 export class taskService{
  private baseUrl = 'http://localhost:3000/tasks';
  constructor(private httpClient: HttpClient){}


  public addTask(newTask: Task){
   const url = '$(this.baseURL}/';
   return this.httpClient.post(url, newTask);
  }
 }