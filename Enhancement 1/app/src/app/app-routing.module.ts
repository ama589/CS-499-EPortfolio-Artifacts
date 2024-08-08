import { RouterModule, Routes } from '@angular/router';
import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';
import { AddAppointmentFormComponent } from './add-appointment-form/add-appointment-form.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  //  {path:'', component: AppComponent, title:'Dashboard'},
    {path:'', component: DashboardComponent, title:'Dashboard'},
    { path: 'add-contact', component: AddContactFormComponent, title: 'Add A Contact' },
    {path: 'add-appointment', component: AddAppointmentFormComponent, title:'Add An Appointment'},
    {path:'add-task', component:AddTaskFormComponent, title:'Add A Task'}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
