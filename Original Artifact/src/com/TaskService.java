package com;
import java.util.ArrayList; 
public class TaskService {
	ArrayList<Task> tasks;
	public TaskService() {
		
		tasks = new ArrayList<Task>();
	}
	
	public void addTask(Task task) {
		
		boolean entered = false;
		for(int i = 0; i < tasks.size(); ++i) {
			if(tasks.get(i).getTaskID() == task.getTaskID()) {
				entered = true;
			}
			
		}
		if(!entered) {
			tasks.add(task);
		}
		
	}
	
	public void deleteTask(Task task) {
		for(int i = 0; i < tasks.size(); ++i) {
			if(tasks.get(i).getTaskID() == task.getTaskID()) {
				tasks.remove(i);
			}
		}
	}
	
	
	public void updateTask(Task task, String name, String descrip) {
		for(int i = 0; i < tasks.size(); ++i) {
			if(tasks.get(i).getTaskID() == task.getTaskID()) {
				tasks.get(i).name = name;
				tasks.get(i).description= descrip;		
			}
		}
		
	}
}
