package com;
import java.util.ArrayList;
public class AppointmentService {
	ArrayList<Appointment> appointments;
	public AppointmentService() {
		appointments = new ArrayList<Appointment>();
	}
	
	public void addAppointment(Appointment apt) {
		boolean entered = false;
		for(int i = 0; i < appointments.size(); ++i) {
			if(appointments.get(i).getAptID() == apt.getAptID()) {
				entered = true;
			}
		}
		if(!entered) {
			appointments.add(apt);
		}
	}
	
	public void deleteApt(Appointment apt) {
		for(int i = 0; i < appointments.size(); ++i) {
			if(appointments.get(i).getAptID() == apt.getAptID()) {
				appointments.remove(i);
			}
		}
	}
	
	
}
