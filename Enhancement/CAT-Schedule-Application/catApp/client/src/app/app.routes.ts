import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { TaskFormComponent } from './task-form/task-form.component';

export const routes: Routes = [
    {path: '', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'dashboard', component: DashboardComponent, title:'Dashboard'},
    {path:'add-contact', component: ContactFormComponent, title:'Add Contact'},
    {path:'add-appointment', component: AppointmentFormComponent, title:'Add Appointment'},
    {path:'add-task', component: TaskFormComponent, title:'Add Task'}
];
