import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ FormBuilder, FormGroup} from '@angular/forms'
import { Task } from '../schemas/tasks.model';
import { taskService } from './taskService';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent implements OnInit{
  
 @Output() addTask: EventEmitter<Task>= new EventEmitter<Task>();

  tasks: Task[]=[];
 // newTask: Task = new Task;
  taskID:string='';
  taskName:string='';
  taskDescrip:string='';
  taskDueDate:string='';
  taskComplete:boolean=false;

  
 constructor(private taskService:taskService){
    
 }
  ngOnInit(): void {
    /*
    this.newTask={
      taskID:'',
      taskName:'',
      taskDescrip:'',
      taskDueDate:new Date,
      taskComplete:false
    };
    */
  }
 
/*
 public onSubmit(){
  this.taskService.addTask(this.newTask).subscribe(res=>res)
  };
  */
 }





