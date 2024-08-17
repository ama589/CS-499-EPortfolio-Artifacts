import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactFormComponent,
        AppointmentFormComponent,
        TaskFormComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        FormBuilder,
        FormGroup,
        FormsModule,
        ReactiveFormsModule,
        MatTableDataSource,
        MatTableModule,
        HttpClient,
        MatSort
    ],
    providers: [ContactService],
    bootstrap: [AppComponent]
})
export class AppModule { }