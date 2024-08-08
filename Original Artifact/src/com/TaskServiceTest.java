package com;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.Assert;
class TaskServiceTest {

	@Test
	void testAddTaskWUID() {
		TaskService tasks = new TaskService();
		Task task = new Task("12345", "Task 1", "Test to add task w/ unique ID");
		tasks.addTask(task);
		Task task2 = new Task("12346", "Task 2", "Test to add task w/ unique ID");
		tasks.addTask(task2);
		Assert.assertTrue(tasks.tasks.size() == 2);
	}
	
	@Test
	void testAddTaskWOUID() {
		TaskService tasks = new TaskService();
		Task task = new Task("12345", "Task 1", "Test to add task w/o unique ID");
		tasks.addTask(task);
		Task task2 = new Task("12345", "Task 2", "Test to add task w/o unique ID");
		tasks.addTask(task2);
		Assert.assertTrue(tasks.tasks.size() == 1);
	}
	
	@Test
	void testDeleteTask() {
		TaskService tasks = new TaskService();
		Task task = new Task("12345", "Task 1", "Test to delete task w/ unique ID");
		tasks.addTask(task);
		Task task2 = new Task("12346", "Task 2", "Test to delete task w/ unique ID");
		tasks.addTask(task2);
		tasks.deleteTask(task);
		Assert.assertTrue(tasks.tasks.size() == 1);
	}
	
	@Test
	void testUpdateTask() {
		TaskService tasks = new TaskService();
		Task task = new Task("12345", "Task 1", "Test to update task name & descrip");
		tasks.addTask(task);
		String prevName = task.getName();
		String prevDesc = task.getDescription();
		tasks.updateTask(task, "New Task 1", "Description updated");
		Assert.assertTrue(task.getName() != prevName && task.getDescription() != prevDesc );
		
	}

}
