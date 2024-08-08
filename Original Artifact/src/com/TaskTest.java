package com;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.Assert;
class TaskTest {

	@Test
	void testTaskIDOverTen() {
		
		Task task = new Task("12345678910","Test for ID", "Testing for ID over 10 char");
		Assert.assertFalse(task.checkTaskPara("12345678910","Test for ID", "Testing for ID over 10 char"));
		
	}
	@Test
	void testTaskIDTen() {
		
		Task task = new Task("1234567891","Test for ID", "Testing for ID with 10 char");
		Assert.assertTrue(task.getTaskID() == "1234567891");
	}
	
	@Test
	void testTaskNameOver20() {
		
		Task task = new Task("1234567891","Test for name Twenty Char", "Testing for name over 20 char");
		Assert.assertFalse(task.checkTaskPara("1234567891","Test for name Twenty Char", "Testing for name over 20 char"));
		
	}
	
	@Test
	void testTaskName20() {
		Task task = new Task("1234567891","Test for name", "Testing for name under 20 char");
		Assert.assertTrue(task.getName() == "Test for name");
	}
	
	@Test
	void testTaskDescripOver50() {
		
		Task task = new Task("1234567891","Test for descrip", "Testing for description over 50 characters............");
		Assert.assertFalse(task.checkTaskPara("1234567891","Test for descrip", "Testing for description over 50 characters............"));
				
	}
	
	@Test
	void testTaskDescription50() {
		Task task = new Task("1234567891","Test for descrip", "Testing for description under 50 char");
		Assert.assertTrue(task.getDescription() == "Testing for description under 50 char");
	}

}
