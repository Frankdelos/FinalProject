import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


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
 


}
