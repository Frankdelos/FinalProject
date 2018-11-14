import { Component, OnInit } from '@angular/core';

interface IDecisionProps {
  condX: boolean;
  condY: boolean;

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  conditions: Array<IDecisionProps> = [];

  constructor() { }

  ngOnInit() {
    this.conditions = [
      {
        condX: false,
        condY: false,
      },
      {
        condX: false,
        condY: true,
      },
      {
        condX: true,
        condY: false,
      },
      {
        condX: true,
        condY: true,
      },
    ]
  }

}
