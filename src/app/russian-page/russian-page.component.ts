import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { UserData } from '../user-data/user.model';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';



export interface IUserData {
  mealCost?: number;
  amountInParty?: number;
  givingTip?: boolean;
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
      this.localStorageService.saveItemsToLocalStorage(this.users);
      console.log("captured data----> ", users);
      this.router.navigate(['final-page', users]);
    }




  }
  // saveRussianDataToLocalStorage(russiandatas: Array<IUserData>) {
  //   return this.localStorageService.saveItemsToLocalStorage(russiandatas);
  // }
  saveItemsToLocalStorage(userdatas: Array<UserData>) {
    return this.localStorageService.saveItemsToLocalStorage(userdatas);
    // const savedData = localStorage.setItem(this.key, JSON.stringify(userdatas));
    // return savedData;
  }

  saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.users));

  }

  addPerson(userData: Array<UserData>) {
    // const newPerson: IUserData = {
    //   userNames: null
    // }
    // console.log('from addPerson');
    // this.users.push(newPerson);
    // this.localStorageService.saveItemsToLocalStorage(userData);
    // return newPerson;
    this.users.unshift(new UserData({}));
    console.log('this.contacts...', this.users);
  }

  deletePerson(index: number) {
    const newPerson: IUserData = {
      userNames: null
    }
    this.users.splice(index, 1);
    this.saveToLocalStorage();
  }




  addTip() {
    this.editMode = true;
    console.log('from addTip');
  }

}
