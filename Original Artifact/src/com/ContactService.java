package com;

import com.Contact;
import java.util.ArrayList;  

public class ContactService {
	ArrayList<Contact> contacts ;
	public ContactService() {
		contacts = new ArrayList<Contact>();
	}
	
	public void addContact(Contact contact) {
		
		boolean entered = false;
		for(int i = 0; i < contacts.size();++i) {
			if(contacts.get(i).getContactID() == contact.getContactID()) {
				entered = true;
			}
		}
		if(!entered) {
			contacts.add(contact);
		}
	
		
	}
	
	
	public void deleteContact(Contact contact) {
		for(int i = 0; i < contacts.size(); ++i) {
			if(contacts.get(i).getContactID() == contact.getContactID()) {
				contacts.remove(i);
			}
		}
	}
	
	
	public void updateContact(Contact contact, String firstName, String lastName, String phone,
			String address) {
		for(int i = 0; i < contacts.size();++i) {
			if(contacts.get(i).getContactID() == contact.getContactID()) {
				contacts.get(i).firstName = firstName;
				contacts.get(i).lastName = lastName;
				contacts.get(i).phone = phone;
				contacts.get(i).address = address
						
						;
			}
		}
	
		
		
	}

}
