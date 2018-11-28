import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorageService';
import { IUserData } from '../user-data/user.model';
import { UserData } from '../user-data/user.model';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../toast/toast.service';


@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  userParams = '';
  currentUser: IUserData;
  localStorageService: LocalStorageService<UserData>;
  user: IUserData = {
    mealCost: null,
    amountInParty: null,
    givingTip: null,
    tipAmount: null
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private toastService: ToastService) { 
    this.localStorageService = new LocalStorageService('userdatas');
  }

  // goToPage(path: string) {
  //   console.log('from goToPage path: ',path);
  //   this.router.navigate([path]);
  // }

  async ngOnInit() {
    this.activatedRoute.params.subscribe((data: IUserData) => {
      console.log("data being transfered: ", data);
      this.currentUser = data;
      this.user.mealCost = this.currentUser.mealCost;
      this.user.amountInParty = this.currentUser.amountInParty;
      this.user.tipAmount = this.currentUser.tipAmount;
    });
  }

  nextStep(user: IUserData, path: string) {
    this.router.navigate(['', user]);
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

  calculateBillSplit (){
    const finalSplit = ((this.user.mealCost * (this.user.tipAmount/100)) + (this.user.mealCost*1)) / this.user.amountInParty;
    return finalSplit.toFixed(2);
  }

  convertTipToDecimal(){
    const adjustedTip = this.user.tipAmount / 100;
    const tipAmount = this.user.mealCost * adjustedTip;
    return tipAmount.toFixed(2);
  }

  calculateTotalWithTip(){
    const totalWithTip = (this.user.mealCost*1) + (this.user.mealCost*(this.user.tipAmount/100));
    return totalWithTip.toFixed(2);

  }


}
