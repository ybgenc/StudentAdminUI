import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../models/ui-models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students : Student[] = []
  
  constructor( private studentService : StudentService ) {}

  ngOnInit () {
    this.studentService.getStudent().subscribe(
      (success) => {
        this.students = success
        
      },
      (err) => {

      }
    )
  }

}
