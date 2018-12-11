import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';
import { UserData } from '../user-data/user.model';
import { ActivatedRoute } from '@angular/router';



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
  userParams = '';
  currentUser: IUserData;
  users: Array<UserData> = [];
  localStorageService: LocalStorageService<UserData>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('userdatas');
  }

  async ngOnInit() {
  }

  nextStep(users: IUserData, path: string) {
    if (users.mealCost === null) {
      this.toastService.showToast('warning', 'Please input a cost', 4000);
    } else if (users.mealCost == 0) {
      this.toastService.showToast('warning', 'Please input a cost above $0', 4000);
    } else if (isNaN(users.mealCost)) {
      this.toastService.showToast('warning', 'Please input numbers only!', 4000);
    } else if (users.tipAmount === null) {
      this.toastService.showToast('warning', 'Please input a tip!', 4000);
    } else if (users.userNames === null || users.userNames === '') {
      this.toastService.showToast('warning', "Please enter a person's name", 4000);
    } else {
      this.localStorageService.saveItemsToLocalStorage(users);
      this.router.navigate(['final-page', users]);
    }
  }
    // if (users.mealCost === null) {
    //   this.toastService.showToast('warning', 'Please input a cost', 4000)
    // } else {
    //   if (users.mealCost == 0) {
    //     this.toastService.showToast('warning', 'Please input a cost above $0', 4000)
    //   }
    // }
    // if (users.tipAmount === null) {
    //   this.toastService.showToast('warning', 'Please input a tip!', 4000);
    // }

    // if (users.userNames === null || users.userNames === '') {
    //   this.toastService.showToast('warning', "Please enter a person's name", 4000);
    // } else {
    //   const rand = Math.floor(Math.random() * this.users.length);
    //   console.log("random number: " + rand);
    //   this.localStorageService.saveItemsToLocalStorage(users);
    //   this.router.navigate(['final-page', users]);
    // }

  

  previousStep(users: IUserData, path: string) {
    this.router.navigate(['home', users]);
  }

  saveItemsToLocalStorage(userdatas: Array<UserData>) {
    return this.localStorageService.saveItemsToLocalStorage(userdatas);
  }

  saveToLocalStorage(key: string, data) {
    localStorage.setItem(key, JSON.stringify(data));

  }

  savePerson(userdatas: Array<UserData>) {
    console.log('from savePerson');
    return this.localStorageService.saveItemsToLocalStorage(userdatas);

  }
  addPerson() {
    const user: IUserData = {
      userNames: null
    };
    this.users.push(user);
    this.saveToLocalStorage('userdatas', this.users);
  }

  deletePerson(index: number) {
    this.users.splice(index, 1);
    this.saveToLocalStorage('userdatas', this.users);
  }

  addTip() {
    this.editMode = true;
  }
  setEditMode(){
    this.editMode = false;
  }


}
