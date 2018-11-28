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
    tipAmount: 0,

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

  // calculateTipTotal (){
    
  //   const adjustedTip = this.user.tipAmount / 100;
  //   const totalNoTip = this.user.mealCost / this.user.amountInParty;

    
  //   const tipToBeAddedToTotal = this.user.mealCost * adjustedTip; 
  //   const totalWithTip = this.user.mealCost + tipToBeAddedToTotal;
  //   const finalSplit = totalWithTip/this.user.amountInParty;
  //   console.log('Split amount without tip -->', totalNoTip);
  //   console.log ('tip to add to total is ---> ', tipToBeAddedToTotal);
  //   console.log('adjusted tip is --> ', adjustedTip);
  //   console.log('Each person pays(including tip): ', finalSplit);
    
  // }




  calculateTipTotal (){
    const calTax = .0725;
    const adjustedTip = this.user.tipAmount / 100;
    const taxAmount = this.user.mealCost * calTax;
    
    const totalIncludingTax = this.user.mealCost*1 + taxAmount*1;
    const tipAmount = totalIncludingTax * adjustedTip;
    const totalWithTaxAndTip = totalIncludingTax + tipAmount;
// excluding tax
    const tipAmountNoTax = this.user.mealCost * adjustedTip;
    const totalNoTaxWithTip = this.user.mealCost*1 + tipAmountNoTax; 
    const finalSplitNoTaxWithTip = totalNoTaxWithTip / this.user.amountInParty;


    // const totalSplitPreTax = this.user.mealCost / this.user.amountInParty;
    const totalSplitTaxPlusTip = totalWithTaxAndTip / this.user.amountInParty;

    console.log('~~~~~~~~~~~~~~Base Variables~~~~~~~~~~~~~~~~~~~~~~');
    console.log('meal cost is ', this.user.mealCost);
    console.log('Adjusted tip: ', adjustedTip);
    console.log('Amount tipped: ', tipAmountNoTax)
    console.log('amount taxed: ', taxAmount);
    console.log('~~~~~~~~~~Calculation With Tax~~~~~~~~~~~~~~');
    console.log('Meal plus tax: ', totalIncludingTax);
    console.log('Tip amount on taxed total: ', tipAmount);
    console.log('Total with tip and tax included: ', totalWithTaxAndTip);
    console.log('Total split including tax and tip: ', totalSplitTaxPlusTip);
    console.log('~~~~~~~~~~Calculation No Tax, With Tip~~~~~~~~~~~');
    console.log('Bill total tip amount is: ', tipAmountNoTax);
    console.log('The total amount with tip, ecluding tax: ', totalNoTaxWithTip);
    console.log('Split amount(excluding tax, include tip): ', finalSplitNoTaxWithTip);
    return finalSplitNoTaxWithTip;

  }
}
