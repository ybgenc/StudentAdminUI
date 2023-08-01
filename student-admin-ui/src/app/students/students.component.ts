import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../models/ui-models/student.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students : Student[] = []
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth','email','mobile','gender'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
  filtering : string = ''

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor( private studentService : StudentService ) {}

  ngOnInit () {
    this.studentService.getStudent().subscribe(
      (success) => {
        this.students = success
        this.dataSource = new MatTableDataSource<Student>(this.students)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort

      },
      (err) => {

      }
    )
  }
  dataFilter(){
    this.dataSource.filter = this.filtering.trim().toLocaleLowerCase()
  }

}
