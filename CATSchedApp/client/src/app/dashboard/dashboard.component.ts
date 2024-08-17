import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, WritableSignal } from '@angular/core';
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
    'firstName', 'lastName', 'phoneNum', 'emailAdd','physAdd', 'actions'
  ];
  displayedColumns2: string[] = [
    'date', 'attends', 'descrip', 'actions'
  ];
  displayedColumns3: string[] = [
    'name', 'descrip', 'dueDate', 'actions'
  ];
  dataSource = new MatTableDataSource<Contact>();
  dataSource2 = new MatTableDataSource<Appointment>();
  dataSource3 = new MatTableDataSource<Task>();


  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild('secondTableSort', { static: true })
  sort2!: MatSort;
  @ViewChild('thirdTableSort', { static: true })
  sort3!: MatSort;

  constructor(
    private contactsService: ContactService,
    private tasksService: TaskService,
    private appointsService: AppointmentService, 
    private http: HttpClient,
    private changeDetectorRefs: ChangeDetectorRef){}



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.fetchContacts();
    this.dataSource2.sort = this.sort2;
    this.dataSource3.sort = this.sort3;
   
  
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


  deleteOnClickContact(contactID: any):void{
  //  console.log(contact)
    console.log(contactID);
    this.contactsService.deleteContact(contactID).subscribe();
    console.log("button clicked");
    window.location.reload();
   // this.refresh();

  }

  deleteOnClickAppoint(appointID: any):void{
    //  console.log(contact)
      console.log(appointID);
      this.appointsService.deleteAppoint(appointID).subscribe();
      console.log("button clicked");
      window.location.reload();

    //  this.refresh();
  
    }


  deleteOnClickTask(taskID: any):void{
      //  console.log(contact)
        console.log(taskID);
        this.tasksService.deleteTask(taskID).subscribe();
        console.log("button clicked");
        window.location.reload();

      //  this.refresh();
    
      }



}
