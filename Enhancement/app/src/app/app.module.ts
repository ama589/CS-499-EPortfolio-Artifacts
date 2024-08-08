import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddContactFormComponent } from "./add-contact-form/add-contact-form.component";
import { AddAppointmentFormComponent } from "./add-appointment-form/add-appointment-form.component";
import { AddTaskFormComponent } from "./add-task-form/add-task-form.component";
import { BrowserModule } from "@angular/platform-browser";
import { Route, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { routes } from "./app-routing.module";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
    declarations:[
        AppComponent,
        DashboardComponent,
        AddContactFormComponent,
        AddAppointmentFormComponent,
        AddTaskFormComponent,
        MatSort
    ],
    imports:[
        AppRoutingModule,
        BrowserModule,
        MatSortModule,
        MatTableModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}