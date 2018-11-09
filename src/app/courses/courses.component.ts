import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class InputHintExample{ 
values= '';

}
export class CoursesComponent implements OnInit {

  student: Array<IStudent> = [];

  editMode: boolean = false;
  constructor() {
    this.student[0] = {
      id: 1,
      firstName: "Franklin",
      lastName: "Delos Santos",
      course: "Programming"
    }
    this.student[1] = {
      id: 1,
      firstName: "Tom",
      lastName: "Brady",
      course: "Swimming"
    }
    this.student[2] = {
      id: 1,
      firstName: "Mark",
      lastName: "Zuc",
      course: "Business"
    }
    this.student[3] = {
      id: 1,
      firstName: "Joe",
      lastName: "Biden",
      course: "Politics"
    }
  }

  ngOnInit() {
  }

  addStudent() {
    this.editMode = true;
    const student: IStudent = {
      id: null,
      firstName: null,
      lastName: null,
      course: null
    };
    // this.student.push(student);
    this.student.unshift(student);
  }

  removeStudent(index: number) {
    console.log(`from removeStudent function index:, ${index}`);
    this.student.splice(index, 1);

  }

  saveStudent() {
    this.editMode = false;
  }

}
