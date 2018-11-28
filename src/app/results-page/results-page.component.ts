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
    mealCost: 0,
    amountInParty: 0,
    givingTip: false,
    tipAmount: 0
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
      this.user.tipAmount = this.currentUser.amountInParty;
    });
  }

  nextStep(user: IUserData, path: string) {
    console.log("from userInput, user: ", user);
    if (user.amountInParty === null) {
      this.toastService.showToast('warning', 'Please input a party amount!', 4000);
    } else {
      if (user.amountInParty === 0) {
        this.toastService.showToast('warning', 'Please input a party amount above 0!', 4000);
      } else {
        this.localStorageService.saveItemsToLocalStorage(user);
        this.router.navigate(['tip-input', user]);
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
