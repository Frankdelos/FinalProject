import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';
import { UserData } from '../user-data/user.model';



export interface IUserData {
  mealCost?: number;
  amountInParty?: number;
  tipAmount?: number;
  userNames?: string;
}
@Component({
  selector: 'app-russian-page',
  templateUrl: './russian-page.component.html',
  styleUrls: ['./russian-page.component.css']
})
export class RussianPageComponent implements OnInit {

  editMode: boolean = false;
  editMode2: boolean = false;
  // persons: Array<IPerson> = [];
  users: Array<UserData> = [];
  localStorageService: LocalStorageService<UserData>;
  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('userdatas');
  }


  ngOnInit() {
  }

  nextStep(users: IUserData, path: string) {
    if (users.mealCost === null) {
      this.toastService.showToast('warning', 'Please input a cost', 4000)
    } else {
      if (users.mealCost == 0) {
        this.toastService.showToast('warning', 'Please input a cost above $0', 4000)
      }
    }
    if (users.tipAmount === null) {
      this.toastService.showToast('warning', 'Please input a tip!', 4000);
    }

    if (users.userNames === null || users.userNames === '') {
      this.toastService.showToast('warning', "Please enter a person's name", 4000);
    } else {
      console.log("captured data----> ", users);
      const rand = Math.floor(Math.random() * 4);
      console.log("random number: " + rand);
      this.localStorageService.saveItemsToLocalStorage(users);
      this.router.navigate(['final-page', users]);
    }

  }

  previousStep(users: IUserData, path: string) {
    //  this.localStorageService.saveItemsToLocalStorage(user);
    this.router.navigate(['home', users]);
  }

  saveItemsToLocalStorage(userdatas: Array<UserData>) {
    return this.localStorageService.saveItemsToLocalStorage(userdatas);
    // const savedData = localStorage.setItem(this.key, JSON.stringify(userdatas));
    // return savedData;
  }

  saveToLocalStorage(key: string, data) {
    localStorage.setItem(key, JSON.stringify(data));

  }

  addPerson() {
    const user: IUserData = {
      // mealCost: null,
      // amountInParty: null,
      // tipAmount: null,
      userNames: null
    };
    this.users.push(user);
    this.saveToLocalStorage('russianUsers', this.users);
  }

  deletePerson(index: number) {
    // const newPerson: IUserData = {
    //   // userNames: null
    // }
    this.users.splice(index, 1);
    this.saveToLocalStorage('russianUsers', this.users);  }

  addTip() {
    this.editMode = true;
    console.log('from addTip');
  }

}
