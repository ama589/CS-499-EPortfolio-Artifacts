import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../services/contact.service';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { response } from 'express';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule, RouterOutlet],
  templateUrl: './contact-form.component.html',
  styleUrl: `./contact-form.component.css`
})
export class ContactFormComponent implements OnInit{

  contactForm!:FormGroup;
  
  


  constructor(
    private contactService: ContactService, 
    private formBuilder: FormBuilder){}


  ngOnInit(): void {
    
    this.contactForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      phoneNum:['',[Validators.required, Validators.pattern('[0-9]{10}')]],
      emailAdd:['',[Validators.required, Validators.email]],
      physAdd:['', Validators.required]

    });

  }

  submitForm():void{
    const formObject = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      phoneNum: this.contactForm.value.phoneNum,
      emailAdd: this.contactForm.value.emailAdd,
      physAdd: this.contactForm.value.physAdd
    }
    console.log("Button Clicked");
    this.contactService.addContact(formObject).subscribe();
    //console.log(formObject);
    this.contactForm.reset();
  }

  
  
  


}
