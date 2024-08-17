import { Inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Contact } from '../interfaces/contact';
import { sign } from 'crypto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService  {
  private url = 'http://localhost:3000/api/contacts';
  
  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(
      `${this.url}`
    );

  }
  
  
  addContact(contact: any): Observable<Contact>{
    console.log(contact);
    return this.httpClient.post<Contact>(
      `${this.url}`, contact);
  }
  

  deleteContact(contactID: any): Observable<Contact>{
    //console.log(contact);
    return this.httpClient.delete<Contact>(
      `${this.url}?id=${contactID}`);
  }

}
