import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ContactFormComponent
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }