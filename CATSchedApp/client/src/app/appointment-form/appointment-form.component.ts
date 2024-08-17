import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, RouterOutlet],
  templateUrl: './appointment-form.component.html',
  styleUrl: `./appointment-form.component.css`
})
export class AppointmentFormComponent implements OnInit{

  appointForm!: FormGroup;

  


  constructor(
    private appointmentService: AppointmentService, 
    private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.appointForm = this.formBuilder.group({
      date:['', Validators.required],
      attends:['', Validators.required],
      descrip:['',Validators.required],
      

    });
  }

  submitForm():void{
    const formObject = {
      date: this.appointForm.value.date,
      attends: this.appointForm.value.attends,
      descrip: this.appointForm.value.descrip,
      
    }
    console.log("Button Clicked");
    this.appointmentService.createAppoint(formObject).subscribe();
    //console.log(formObject);
    this.appointForm.reset();
  }
  
  



}
