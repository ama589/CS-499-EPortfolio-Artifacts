package com;

import static org.junit.jupiter.api.Assertions.*;

import java.text.ParseException;
import java.text.SimpleDateFormat; 

import org.junit.jupiter.api.Test;
import java.util.Date;
import org.junit.Assert;
class AppointmentTest {

	@Test
	void testAptIDOvTen() throws ParseException{
		String sDate = "10/10/2023";
		
		Date testD = new SimpleDateFormat("dd/MM/yyyy").parse(sDate);
		Appointment apt = new Appointment("12345678910", testD, "Test for aptID over 10 char");
		Assert.assertFalse(apt.checkAptPara("12345678910", testD, "Test for aptID over 10 char"));
		
	}
	
	@Test
	void testAptIDTen() throws ParseException{
		
			String sDate = "10/10/2023";
			Date testD = new SimpleDateFormat("dd/MM/yyyy").parse(sDate);
			Appointment apt = new Appointment("12345", testD, "Test for apt with under 10");
			Assert.assertTrue(apt.getAptID() == "12345");
		
	}
	
	@Test
	void testDateBefore() throws ParseException {
		
		String sDate = "25/09/2023";
		Date testD = new SimpleDateFormat("dd/MM/yyyy").parse(sDate);
		Appointment apt = new Appointment("12345", testD, "Test for date before today");
		Assert.assertFalse(apt.checkAptPara("12345", testD, "Test for date before today"));
		
	}
	
	@Test
	void testDateAfter() throws ParseException{
		
			String sDate = "10/10/2023";
			Date testD = new SimpleDateFormat("dd/MM/yyyy").parse(sDate);
			Appointment apt = new Appointment("12345", testD, "Test for date after today");
			Assert.assertTrue(apt.getDate() == testD);
		
		
	}
	
	@Test
	void testDescripOv50() throws ParseException {
		String sDate = "10/10/2023";
		
		Date testD = new SimpleDateFormat("dd/MM/yyyy").parse(sDate);
		Appointment apt = new Appointment("12345", testD, "Test for description over 50 characters long additional characters to reach over 50");
		Assert.assertFalse(apt.checkAptPara("12345", testD, "Test for description over 50 characters long additional characters to reach over 50"));
	
	}
	
	@Test
	void testDescripUn50() throws ParseException {
		String sDate = "10/10/2023";
		Date testD = new SimpleDateFormat("dd/MM/yyyy").parse(sDate);
		Appointment apt = new Appointment("12345", testD, "Test for descrip under 50 char");
		Assert.assertTrue(apt.getDescrip() == "Test for descrip under 50 char");
		
	}

}
