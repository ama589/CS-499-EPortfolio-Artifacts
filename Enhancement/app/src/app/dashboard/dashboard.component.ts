import { AfterViewInit, Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, RouterLink, RouterModule } from '@angular/router';
import { AddContactFormComponent } from '../add-contact-form/add-contact-form.component';
import { Contact } from '../schemas/contacts.model';
import { MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';


const testContacts: Contact[]=[
  {
    "firstName": "Jon",
    "lastName": "Snow",
    "phoneNum": "123-456-7890",
    "address": "123 Winterfell Ln"
},
{
    "firstName": "Daenerys",
    "lastName": "Targaryen",
    "phoneNum": "875-364-1873",
    "address": "485 Dragonstone Ct"
},

{
    "firstName": "Alicent",
    "lastName": "Hightower",
    "phoneNum": "586-142-6842",
    "address": "975 Old Town Rd"
}
];


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,AddContactFormComponent, MatTableModule, MatTable, NgFor,
    RouterLink, RouterModule, MatSortModule, MatSort
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit, AfterViewInit{

  

  displayedColumns: string[]= ['firstName','lastName','phoneNum','address'];
 
  sortedTestContacts: Contact[] = [];

  dataSource = new MatTableDataSource<Contact>;
 
  constructor(private router: Router){
  // this.sortedTestContacts=this.testContacts.slice();
  }
  

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(testContacts);
    this.dataSource.sort = this.sort;

  }
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  /*
  sortData(sort: Sort) {
    const data = this.testContacts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedTestContacts = data;
      return;
    }

    this.sortedTestContacts = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'firstName':
          return compare(a.firstName, b.firstName, isAsc);
        case 'lastName':
          return compare(a.lastName, b.lastName, isAsc);
        case 'phoneNum':
          return compare(a.phoneNum, b.phoneNum, isAsc);
        case 'address':
          return compare(a.address, b.address, isAsc);
        default:
          return 0;
      }
    });
  }
    */
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
  




