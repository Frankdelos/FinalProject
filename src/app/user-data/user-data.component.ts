import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  userDatas: Array<UserData> = [];
  // localStorageService: LocalStorageService<UserData>;
  constructor() {
    // this.localStorageService = new LocalStorageService('userdatas');
   }

  ngOnInit() {
  }

 


}
