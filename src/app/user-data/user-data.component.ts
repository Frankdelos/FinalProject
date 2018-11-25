import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data/user.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  userDatas: Array<UserData> = [];
  constructor() { }

  ngOnInit() {
  }

}
