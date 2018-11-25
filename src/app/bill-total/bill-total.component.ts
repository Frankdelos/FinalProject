import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorageService';
import { IUserData } from '../user-data/user.model';


@Component({
  selector: 'app-bill-total',
  templateUrl: './bill-total.component.html',
  styleUrls: ['./bill-total.component.css']
})
export class BillTotalComponent implements OnInit {

  user: IUserData = { mealCost: 0, amountInParty: 0, givingTip: false, tipAmount: 0 };
  constructor(private router: Router) { }


  // goToPage(path: string) {
  //   console.log('from goToPage path: ', path);
  //   this.router.navigate([path]);
  // }

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
        this.router.navigate(['party-input']);
      }
    }

  }

}
