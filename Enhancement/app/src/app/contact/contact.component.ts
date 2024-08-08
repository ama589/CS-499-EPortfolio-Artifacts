import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppComponent } from '../app.component';
import { Contact } from '../schemas/contacts.model';
import { contactService } from '../services/contact.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent,AppComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers:[contactService]
})
export class ContactComponent implements OnInit{
/*
  contacts: Contact[];
  contact: Contact;
  firstName: string;
  lastName: string;
  phoneNum: string;
  address: string;
  angForm: FormGroup;
  submitted=false;
*/
  constructor(private contactService: contactService, private formB: FormBuilder){
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
