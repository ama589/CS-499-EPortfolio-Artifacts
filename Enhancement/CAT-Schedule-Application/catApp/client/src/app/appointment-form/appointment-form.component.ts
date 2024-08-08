import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: `./appointment-form.component.css`
})
export class AppointmentFormComponent implements OnInit{

  appointForm: any;

  


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
    if(this.appointForm?.valid){
      console.log('Form data:', this.appointForm.value);
    }
  }
  
  



}
