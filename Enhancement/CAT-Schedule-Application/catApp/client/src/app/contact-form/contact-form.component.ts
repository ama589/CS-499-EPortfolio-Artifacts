import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../services/contact.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: `./contact-form.component.css`
})
export class ContactFormComponent implements OnInit{

  contactForm: any;

  


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
    if(this.contactForm?.valid){
      this.contactService.createContact(this.contactForm);
    }
  }
  
  


}
