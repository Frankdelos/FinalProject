import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { RussianData } from '../user-data/user.model';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';
import { UserData } from '../user-data/user.model';


export interface IPerson {
  russianBillTotal?: number;
  russianTip?: number;
  russianNames: string;
}
@Component({
  selector: 'app-russian-page',
  templateUrl: './russian-page.component.html',
  styleUrls: ['./russian-page.component.css']
})
export class RussianPageComponent implements OnInit {

  editMode: boolean = false;
  editMode2: boolean = false;
  persons: Array<RussianData> = [];
  users: Array<IUserData> = [];
    // mealCost: null,
    // amountInParty: null,
    // tipAmount: null,
    // userNames: null
  localStorageService: LocalStorageService<UserData>;
  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('russiandatas');
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
    } else {
      if (users.tipAmount) {
        this.toastService.showToast('warning', 'Please input a party amount above 0!', 4000);
      }
      if (users.userNames === null || users.userNames === '') {
        this.toastService.showToast('warning', "Please enter a person's name", 4000);
      } else {
        this.localStorageService.saveRussianDataToLocalStorage(this.users);
        console.log("captured data----> ", users);
        this.router.navigate(['final-page', users]);
      }
    }
  }

  // saveItemsToLocalStorage(userdatas: Array<UserData>) {
  //   return this.localStorageService.saveItemsToLocalStorage(userdatas);
  //   // const savedData = localStorage.setItem(this.key, JSON.stringify(userdatas));
  //   // return savedData;
  // }

  saveRussianDataToLocalStorage(russiandatas: Array<IUserData>) {
    return this.localStorageService.saveItemsToLocalStorage(russiandatas);
  }

  saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.users));

  }

  addPerson() {
    const newPerson: IUserData = {
      userNames: null
    }
    this.users.push(newPerson);
    this.saveToLocalStorage();
  }

  deletePerson(index: number) {
    const newPerson: IPerson = {
      russianNames: null
    }
    this.persons.splice(index, 1);
    this.saveToLocalStorage();
  }

  addTip() {
    this.editMode = true;
    console.log('from addTip');
  }

}
