import { Injectable, signal } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { app } from '../../../server';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private url = 'http://localhost:3000/api/appointments';


  constructor(private httpClient: HttpClient) { }

  getAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(
      `${this.url}`
    );
  }
  
  createAppoint(appoint: any): Observable<Appointment>{
 //   console.log(contact);
    return this.httpClient.post<Appointment>(
      `${this.url}`, appoint);  }


  deleteAppoint(appointID: any): Observable<Appointment>{
    return this.httpClient.delete<Appointment>(
      `${this.url}?id=${appointID}`);
  }

  
}
