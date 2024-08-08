import { isDate } from "util/types";

export class Task{
    taskID:string='';
    taskName:string='';
    taskDescrip:string='';
    taskDueDate:Date=new Date;
    taskComplete:boolean=false;
}