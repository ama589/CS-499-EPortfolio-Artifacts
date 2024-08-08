import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';
import { Router } from 'express';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddContactFormComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
 
}
