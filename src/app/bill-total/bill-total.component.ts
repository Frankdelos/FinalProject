import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorageService';
import { IUserData } from '../user-data/user.model';
import { UserData } from '../user-data/user.model';


@Component({
  selector: 'app-bill-total',
  templateUrl: './bill-total.component.html',
  styleUrls: ['./bill-total.component.css']
})
export class BillTotalComponent implements OnInit {

  user: IUserData = { mealCost: 0, amountInParty: 0, givingTip: false, tipAmount: 0 };
  localStorageService: LocalStorageService<UserData>;
  constructor(private router: Router) { 
    this.localStorageService = new LocalStorageService('userdatas');
  }


  goToPage(path: string) {
    console.log('from goToPage path: ', path);
    this.router.navigate([path]);
  }

  ngOnInit() {
  }

  nextStep(user: IUserData, path: string) {
    console.log("from userInput, user: ", user);
    if (user.mealCost === null) {
      console.log('show toast here 2');
    } else {
      if (user.mealCost === 0) {
        console.log('show toast here');
      } else {
        this.localStorageService.saveItemsToLocalStorage(user);
        this.router.navigate(['party-input', user]);
      }
    }

  }

  saveItemsToLocalStorage(userdatas: Array<UserData>) {
    return this.localStorageService.saveItemsToLocalStorage(userdatas);
    // const savedData = localStorage.setItem(this.key, JSON.stringify(userdatas));
    // return savedData;
}

getItemsFromLocalStorage() {
  return this.localStorageService.getItemsFromLocalStorage();
    // const savedData = JSON.parse(localStorage.getItem(this.key));
    // return savedData;
}



}
