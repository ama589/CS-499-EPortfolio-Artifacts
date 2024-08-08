package com;

public class Task {
	private String taskID;
	public String name;
	public String description;
	
	public Task(String taskID, String name, String description) {
		
		boolean valid = checkTaskPara(taskID, name, description);
		
		if(valid) {
		this.taskID = taskID;
		this.name = name;
		this.description = description;
		}
			
	}
	
	public boolean checkTaskPara(String taskID, String name, String description) {
		boolean valid = true;
		
		if(taskID == null || taskID.length() > 10) {
			valid = false;
		} 
		
		if(name == null || name.length() > 20) {
			valid = false;
		}
		
		if(description == null || description.length() > 50) {
			valid = false;
		}
		return valid;
		
	}
	
	public String getTaskID() {
		return taskID;
	}
	
	public String getName() {
		
		return name;
	}
	
	public String getDescription() {
		
		return description;
	}
	
	
}
