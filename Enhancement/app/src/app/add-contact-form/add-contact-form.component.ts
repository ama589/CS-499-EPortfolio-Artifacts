import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppComponent } from '../app.component';
import { title } from 'node:process';
 

@Component({
  selector: 'add-contact',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent,AppComponent],
  templateUrl: './add-contact-form.component.html',
  styleUrl: './add-contact-form.component.css'
})
export class AddContactFormComponent{
 
  


}
