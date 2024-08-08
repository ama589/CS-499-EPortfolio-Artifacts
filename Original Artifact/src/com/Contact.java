package com;

public class Contact {
	private String contactID;
	public String firstName;
	public String lastName;
	public String phone;
	public String address;
	
	public Contact(String contactID, String firstName, 
			String lastName, String phone, String address) {
		
		boolean valid = checkContactPara(contactID,firstName,lastName,phone,address);
		if(valid) {
		this.contactID = contactID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.address = address;
		}
	}
	
	public boolean checkContactPara(String contactID, String firstName, 
			String lastName, String phone, String address) {
		boolean valid = true;
		if(contactID == null || contactID.length() > 10) {
			valid = false;	
		}
	
		if(firstName == null || firstName.length() > 10) {
			valid = false;
		}
		
		if(lastName == null || lastName.length() > 10) {
			valid = false;
		}
		
		if(phone == null || phone.length() != 10) {
			valid = false;
		}
		
		if(address == null || address.length() > 30) {
			valid = false;
		}
		
		return valid;
		
	}
	
	public String getContactID() {
		return contactID;
	}
	public String getFirstName() {
		return firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public String getPhone() {
		return phone;
	}
	public String getAddress() {
		return address;
	}
}
