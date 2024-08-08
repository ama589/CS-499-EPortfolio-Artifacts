import { RouterModule, Routes } from '@angular/router';
import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';
import { AddAppointmentFormComponent } from './add-appointment-form/add-appointment-form.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

export const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'dashboard', component: DashboardComponent, title:'Dashboard'},
    {path: 'add-contact', component: AddContactFormComponent, title: 'Add A Contact' },
    {path: 'add-appointment', component: AddAppointmentFormComponent, title:'Add An Appointment'},
    {path:'add-task', component:AddTaskFormComponent, title:'Add A Task'}
    

];

@NgModule({
    imports:[RouterModule.forRoot(routes), 
      MatSortModule, MatTableModule,],
    exports:[RouterModule]
})
export class AppRoutingModule{}
