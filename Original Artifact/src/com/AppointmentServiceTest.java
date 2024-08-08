package com;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import java.text.ParseException;
import java.text.SimpleDateFormat; 
import java.util.Date;

import org.junit.Assert;
class AppointmentServiceTest {

	@Test
	void testAddAptWUID() throws ParseException {
		AppointmentService appts = new AppointmentService();
		String sDate = "10/10/2023";
		Date testD = new SimpleDateFormat("dd/MM/yyyy").parse(sDate);
		Appointment apt = new Appointment("12345", testD, "Apt 1");
		appts.addAppointment(apt);
		String sDate2 = "15/10/2023";
		Date testD2 = new SimpleDateFormat("dd/MM/yyyy").parse(sDate2);
		Appointment apt2 = new Appointment("56789", testD2, "Apt 2");
		appts.addAppointment(apt2);
		Assert.assertTrue(appts.appointments.size() == 2);
	
	}
	
	@Test
	void testAddAptWOUID() throws ParseException {
		AppointmentService appts = new AppointmentService();
		String sDate = "10/10/2023";
		Date testD = new SimpleDateFormat("dd/MM/yyyy").parse(sDate);
		Appointment apt = new Appointment("12345", testD, "Apt 1");
		appts.addAppointment(apt);
		String sDate2 = "15/10/2023";
		Date testD2 = new SimpleDateFormat("dd/MM/yyyy").parse(sDate2);
		Appointment apt2 = new Appointment("12345", testD2, "Apt 2");
		appts.addAppointment(apt2);
		Assert.assertTrue(appts.appointments.size() == 1);
	}
	
	@Test
	void testDeleteApt() throws ParseException{
		AppointmentService appts = new AppointmentService();
		String sDate = "10/10/2023";
		Date testD = new SimpleDateFormat("dd/MM/yyyy").parse(sDate);
		Appointment apt = new Appointment("12345", testD, "Apt 1");
		appts.addAppointment(apt);
		String sDate2 = "15/10/2023";
		Date testD2 = new SimpleDateFormat("dd/MM/yyyy").parse(sDate2);
		Appointment apt2 = new Appointment("56789", testD2, "Apt 2");
		appts.addAppointment(apt2);
		appts.deleteApt(apt2);
		Assert.assertTrue(appts.appointments.size() == 1);
		
	}
}
