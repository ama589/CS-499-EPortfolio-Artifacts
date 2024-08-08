import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddContactFormComponent } from '../add-contact-form/add-contact-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,AddContactFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
