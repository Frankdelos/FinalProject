import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorageService';
import { IUserData } from '../user-data/user.model';
import { UserData } from '../user-data/user.model';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../toast/toast.service';


@Component({
  selector: 'app-party-input',
  templateUrl: './party-input.component.html',
  styleUrls: ['./party-input.component.css']
})
export class PartyInputComponent implements OnInit {

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
    });
  }

  nextStep(user: IUserData, path: string) {
    if (user.amountInParty === null) {
      this.toastService.showToast('warning', 'Please input a party amount!', 4000);
    } else {
      if (user.amountInParty == 0) {
        this.toastService.showToast('warning', 'Please input a party amount above 0!', 4000);
      } else {
        this.localStorageService.saveItemsToLocalStorage(user);
        this.router.navigate(['tip-input', user]);
      }
    }

  }

  previousStep(user: IUserData, path: string) {
    //  this.localStorageService.saveItemsToLocalStorage(user);
     this.router.navigate(['bill-total',user]);
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
