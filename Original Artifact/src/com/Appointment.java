package com;
import java.util.Date;
public class Appointment {
	private String appointID;
	private Date date;
	private String descrip;
	
	public Appointment(String appointID, Date date, String descrip) {
		
		boolean valid = checkAptPara(appointID, date, descrip);
		
		if(valid) {
		this.appointID = appointID;
		this.date = date;
		this.descrip = descrip;
		}
	}
	
	public boolean checkAptPara(String appointID, Date date, String descrip) {
		
		boolean valid = true;
		if(appointID == null || appointID.length()> 10) {
			valid = false;
		}
		
		java.util.Date curDate = new java.util.Date();
	
		if(date == null || !curDate.before(date) ) {
			valid = false;
		}
		
		if(descrip == null || descrip.length() > 50) {
			valid = false;
		}
		return valid;
	}
	
	public String getAptID() {return appointID;}
	
	public Date getDate() {return date;}
	
	public String getDescrip() {return descrip;}
	
	
}
