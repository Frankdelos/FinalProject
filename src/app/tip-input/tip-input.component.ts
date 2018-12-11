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
    mealCost: null,
    amountInParty: null,
    tipAmount: null,
    customTip: null
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('userdatas');
  }


  async ngOnInit() {
    this.activatedRoute.params.subscribe((data: IUserData) => {
      console.log("data being transfered: ", data);
      this.currentUser = data;
      this.user.mealCost = this.currentUser.mealCost;
      this.user.amountInParty = this.currentUser.amountInParty;
    });
  }

  nextStep(user: IUserData, path: string) {
    if (user.tipAmount === null) {
      this.toastService.showToast('warning', 'Please input a tip!', 4000);
    } else {
      if (user.tipAmount == 0) {
        this.toastService.showToast('warning', 'Please input a tip amount above 0!', 4000);
      } else {
        this.localStorageService.saveItemsToLocalStorage(user);
        this.router.navigate(['summary', user]);
      }
    }
  }

  previousStep(user: IUserData, path: string) {
    this.router.navigate(['party-input', user]);
  }

  saveItemsToLocalStorage(userdatas: Array<UserData>) {
    return this.localStorageService.saveItemsToLocalStorage(userdatas);
  }

  getItemsFromLocalStorage() {
    return this.localStorageService.getItemsFromLocalStorage();
  }

  addTip() {
    this.editMode = true;
    console.log('from addTip');
  }
  setEditMode(){
    this.editMode = false;
  }

}
