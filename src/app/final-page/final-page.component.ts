import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { UserData } from '../user-data/user.model';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';


export interface IPerson {
  russianBillTotal?: number;
  russianTip?: number;
  russianNames: string;
}
@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})
export class russianpage implements OnInit {

  localStorageService: LocalStorageService<UserData>;
  constructor(private router: Router, private toastService: ToastService) { 
    this.localStorageService = new LocalStorageService('userdatas');
  }

  ngOnInit() {
  }

  persons: Array<IPerson> = [];
  user: IUserData = {
    mealCost: null,
    amountInParty: null,
    givingTip: null,
    tipAmount: null,
    userNames: ''
  };




  displayNames(){
    for (let i = 0; i < this.persons.length; i++) {
      console.log ('i ---> ', i, "this.persons[i]", this.persons[i]);
    }
  }

}
