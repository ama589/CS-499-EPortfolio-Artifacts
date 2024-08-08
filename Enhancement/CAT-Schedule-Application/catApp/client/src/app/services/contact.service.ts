import { Inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Contact } from '../interfaces/contact';
import { sign } from 'crypto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService  {
  private url = 'http://localhost:3000/api';
  
  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(
      `${this.url}/contacts`
    );

  }
  
  
  createContact(contact: Contact){
    return this.httpClient.post<Contact[]>(`${this.url}/SaveContact`, contact)
  }

  

}
