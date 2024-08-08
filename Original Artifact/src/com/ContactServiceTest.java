package com;
import com.ContactService;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.Assert;
import org.junit.jupiter.api.Test;

class ContactServiceTest {

	@Test
	void testAddContactWUID() {
		ContactService contacts = new ContactService();
		Contact contact = new Contact("12345","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact); 
		Contact contact2 = new Contact("12346","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact2);
		Assert.assertTrue(contacts.contacts.size() == 2);
		
	}
	
	@Test
	void testAddContactWOID() {
		ContactService contacts = new ContactService();
		Contact contact = new Contact("56789","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact); 
		Contact contact2 = new Contact("56789","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact2);
		Assert.assertTrue(contacts.contacts.size() == 1);
		
	}
	
	
	@Test
	void testDeleteContact() {
		ContactService contacts = new ContactService();
		Contact contact = new Contact("12345","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact); 
		Contact contact2 = new Contact("12346","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact2);
		contacts.deleteContact(contact);
		Assert.assertTrue(contacts.contacts.size() == 1);
		
	}
	
	@Test
	void testUpdateContactFirstName() {
		ContactService contacts = new ContactService();
		Contact contact = new Contact("12345","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact); 
		String prevName = contact.firstName;

		contacts.updateContact(contact, "Ashley", "Apgood", "13606895626", "1800 Wallaby Way");
		Assert.assertTrue(contacts.contacts.get(0).firstName != prevName);
		
	}
	
	@Test
	void testUpdateContactLastName() {
		ContactService contacts = new ContactService();
		Contact contact = new Contact("12345","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact); 
		String prevLName = contact.lastName;
	
		contacts.updateContact(contact, "Ashley", "Apgood", "13606895626", "1800 Wallaby Way");
		Assert.assertTrue(contacts.contacts.get(0).lastName != prevLName);
		
	}
	
	
	@Test
	void testUpdateContactPhone() {
		ContactService contacts = new ContactService();
		Contact contact = new Contact("12345","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact); 

		String prevPhone = contact.phone;
		contacts.updateContact(contact, "Ashley", "Apgood", "13606895626", "1800 Wallaby Way");
		Assert.assertTrue(contacts.contacts.get(0).phone != prevPhone);
		
	}
	
	@Test
	void testUpdateContactAddress() {
		ContactService contacts = new ContactService();
		Contact contact = new Contact("12345","FirstName","LastName","phonenumbr","address");
		contacts.addContact(contact); 
		String prevAdd = contact.address;
		contacts.updateContact(contact, "Ashley", "Apgood", "13606895626", "1800 Wallaby Way");
		Assert.assertTrue(contacts.contacts.get(0).address != prevAdd);
		
	}
}
