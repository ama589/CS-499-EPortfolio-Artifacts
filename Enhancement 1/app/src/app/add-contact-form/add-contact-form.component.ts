import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { Contact } from '../schemas/contacts';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppComponent } from '../app.component';
 

@Component({
  selector: 'add-contact',
  standalone: true,
  imports: [RouterModule, DashboardComponent,AppComponent],
  templateUrl: './add-contact-form.component.html',
  styleUrl: './add-contact-form.component.css'
})
export class AddContactFormComponent implements OnInit{
 
  constructor(private router: Router){}
  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }


 


}
