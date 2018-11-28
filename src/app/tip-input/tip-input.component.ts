import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorageService';
import { IUserData } from '../user-data/user.model';
import { UserData } from '../user-data/user.model';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-tip-input',
  templateUrl: './tip-input.component.html',
  styleUrls: ['./tip-input.component.css']
})
export class TipInputComponent implements OnInit {


  editMode: boolean = false;
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
  //   console.log('from goToPage path: ', path);
  //   this.router.navigate([path]);
  // }

  async ngOnInit() {
    this.activatedRoute.params.subscribe((data: IUserData) => {
      console.log("data being transfered: ", data);
      this.currentUser = data;
      this.user.mealCost = this.currentUser.mealCost;
      this.user.amountInParty = this.currentUser.amountInParty;
    });
  }

  nextStep(user: IUserData, path: string) {
    console.log("from userInput, user: ", user);
    if (user.tipAmount === 0) {
      this.toastService.showToast('warning', 'Please input a tip above 0!', 4000);
    } else {
      this.localStorageService.saveItemsToLocalStorage(user);
      this.router.navigate(['summary', user]);
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

  addTip(){
    this.editMode = true;
    console.log('from addTip');
  }


}