import { isDate } from "util/types";

export interface Task{
    taskID:string;
    taskName:string;
    taskDescrip:string;
    taskDueDate:Date;
    taskComplete:boolean;
}