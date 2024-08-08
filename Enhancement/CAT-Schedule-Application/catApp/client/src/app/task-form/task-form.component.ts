import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: `./task-form.component.css`
})
export class TaskFormComponent {
  taskForm: any;

  


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
    if(this.taskForm?.valid){
      console.log('Form data:', this.taskForm.value);
    }
  }
  
}
