import { Injectable, signal } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private url = 'http://localhost:3000/api';


  constructor(private httpClient: HttpClient) { }

  getAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(
      `${this.url}/appointments`
    );
  }
  
  createAppoint(appoint: Appointment){
    return this.httpClient.post<Appointment[]>(`${this.url}/SaveAppointment`, appoint)
  }

  
}
