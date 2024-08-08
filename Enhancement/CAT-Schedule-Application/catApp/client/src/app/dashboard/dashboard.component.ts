import { AfterViewInit, Component, OnInit, ViewChild, WritableSignal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../services/contact.service';
import { TaskService } from '../services/task.service';
import { AppointmentService } from '../services/appointment.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../interfaces/appointment';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatTableModule, MatSort, MatSortModule],
  templateUrl: './dashboard.component.html',
  styleUrl: `./dashboard.component.css`
})

export class DashboardComponent implements OnInit, AfterViewInit {

 // contacts$ = {} as WritableSignal<Contact[]>;

 contacts: Contact[] | undefined;
 tasks: Task[] | undefined;
 appointments: Appointment[] | undefined;
  displayedColumns: string[] = [
    'firstName', 'lastName', 'phoneNum', 'emailAdd','physAdd'
  ];
  displayedColumns2: string[] = [
    'date', 'attends', 'descrip'
  ];
  displayedColumns3: string[] = [
    'name', 'descrip', 'dueDate'
  ];
  dataSource = new MatTableDataSource<Contact>();
  dataSource2 = new MatTableDataSource<Appointment>();
  dataSource3 = new MatTableDataSource<Task>();


  @ViewChild(MatSort, { static: false })
  sort!: MatSort;

  constructor(
    private contactsService: ContactService,
    private tasksService: TaskService,
    private appointsService: AppointmentService, 
    private http: HttpClient){}



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource2.sort = this.sort;
    this.dataSource3.sort = this.sort;
   
  
  }


  ngOnInit() {
   this.fetchContacts()
   this.fetchAppointments();
   this.fetchTasks();
   
  }
  

  fetchContacts(){
   
   this.contactsService.getContacts().subscribe(
    resp => {
      this.dataSource  = new MatTableDataSource(resp);
    }, err => {
      console.log(err);
  
    });
  }

  fetchAppointments(){
    this.appointsService.getAppointments().subscribe(
      resp=>{
        this.dataSource2 = new MatTableDataSource(resp);
      },err=>{
        console.log(err);
      }
    );
  }

  fetchTasks(){
    this.tasksService.getTasks().subscribe(
      resp=>{
        this.dataSource3 = new MatTableDataSource(resp);
      },err=>{
        console.log(err);
      }
    );
  }


}
