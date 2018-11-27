import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorageService';
import { IUserData } from '../user-data/user.model';
import { UserData } from '../user-data/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  userParams = '';
  currentUser: IUserData;
  localStorageService: LocalStorageService<UserData>;
  user: IUserData = {
    mealCost: 0,
    amountInParty: 0,
    givingTip: false,
    tipAmount: 0
  };


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.localStorageService = new LocalStorageService('userdatas');
  }


  async ngOnInit() {
    this.activatedRoute.params.subscribe((data: IUserData) => {
      console.log("data being transfered: ", data);
      this.currentUser = data;
      this.user.mealCost = this.currentUser.mealCost;
      this.user.amountInParty = this.currentUser.amountInParty;
      this.user.tipAmount = this.currentUser.tipAmount;
    });
  }

  goToPage(path: string) {
    console.log('from goToPage path: ', path);
    this.router.navigate([path]);
  }

  // nextStep(user: IUserData, path: string) {
  //   console.log("from userInput, user: ", user);
  //       this.localStorageService.saveItemsToLocalStorage(user);
  //       this.router.navigate(['']);
  // }

  // calculateTotal (){
  //   const total = this.user.mealCost / this.user.amountInParty;
  //   console.log ('each person pays(no tip) --> ', total);
  //   return total;
    
  // }

  calculateTipTotal (){
    const total = this.user.mealCost / this.user.amountInParty;
    const adjustedTip = this.user.tipAmount / 100;
    const tipToBeAddedToTotal = total * adjustedTip; 
    const finalSplit = total + tipToBeAddedToTotal;
    console.log('Split amount without tip -->', total);
    console.log ('tip to add to total is ---> ', tipToBeAddedToTotal);
    console.log('each person pays(tip) -->', finalSplit);
    console.log('adjusted tip is --> ', adjustedTip);
    return finalSplit;
  }
}
