import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, RouterOutlet],
  templateUrl: './task-form.component.html',
  styleUrl: `./task-form.component.css`
})
export class TaskFormComponent implements OnInit{
  taskForm!: FormGroup;

  


  constructor(
    private taskService: TaskService, 
    private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      name:['', Validators.required],
      descrip:['', Validators.required],
      dueDate:['',Validators.required],
     // comp:['', Validators.required]
      

    });
  }

  submitForm():void{
    const formObject = {
      name: this.taskForm.value.name,
      descrip: this.taskForm.value.descrip,
      dueDate: this.taskForm.value.dueDate,
      comp: false,
      
    }
   // console.log("Button Clicked");
    this.taskService.createTask(formObject).subscribe();
    //console.log(formObject);
    this.taskForm.reset();
  }
  
}
