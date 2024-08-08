package com;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
class ContactTest {
/*
 * 	change exception to isvalid boolean variable sest to false where current exception located
 * 
 * 
 * */
	@Test
	void testContactIDOverTen() {
		 Contact contact = new Contact("12345678910", "FirstName", "LastName","Phonenumbr","Address");
		 Assert.assertFalse(contact.checkContactPara("12345678910", "FirstName", "LastName","Phonenumbr","Address"));
	
	}
	@Test
	void testContactIDTen() {
		Contact contact = new Contact("1234567890", "FirstName", "LastName","Phonenumbr","Address");
		Assert.assertTrue(contact.getContactID()=="1234567890");
	}
		
	@Test
	void testContactFirstName() {
		Contact contact = new Contact("12345","BillyBobSue","Smith","phonenumbr","address");
		 Assert.assertFalse(contact.checkContactPara("12345","BillyBobSue","Smith","phonenumbr","address"));
	

		}
	
	@Test
	void testFirstName() {
		Contact contact = new Contact("12346", "FirstName", "LastName","Phonenumbr","Address");
		Assert.assertTrue(contact.getFirstName()=="FirstName");
		
	}
	
	@Test
	void testContactLastName() {
		Contact contact = new Contact("12345","Billy","BobSueJohnJr","phonenumbr","address");
		 Assert.assertFalse(contact.checkContactPara("12345","Billy","BobSueJohnJr","phonenumbr","address"));
	
	
	}
	
	@Test
	void testLastName() {
		
		
		Contact contact = new Contact("12346", "FirstName", "LastName","Phonenumbr","Address");
		Assert.assertTrue(contact.getLastName()=="LastName");
		
	}
	
	@Test
	void testContactPhoneOTen() {
		
		Contact contact = new Contact("12345","Billy","BobSue","phonenumber","address");
		 Assert.assertFalse(contact.checkContactPara("12345","Billy","BobSue","phonenumber","address"));
				

	}
	
	@Test
	void testContactPhone() {
		
		Contact contact = new Contact("12345","Mary","Smith", "phonenumbr", "address");
		Assert.assertTrue(contact.getPhone().length() == 10);
		
		
	}
	
	@Test
	void testContactAddress() {
		
		Contact contact = new Contact("12345","Mary","Smith", "phonenumbr", "address 58634 testing testing testing testing");
		 Assert.assertFalse(contact.checkContactPara("12345","Mary","Smith", "phonenumbr", "address 58634 testing testing testing testing"));
	
		
	}
	
	@Test
	void testAddress() {
		
		Contact contact = new Contact("12345","Mary","Smith", "phonenumbr", "address");
		Assert.assertTrue(contact.getAddress() == "address");
		
		
	}
	
	

}
