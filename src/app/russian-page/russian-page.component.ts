import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { RussianData } from '../user-data/user.model';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';


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
  user: IUserData = {
    mealCost: null,
    amountInParty: null,
    tipAmount: null,
    userNames: null
  };
  localStorageService: LocalStorageService<RussianData>;
  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('russiandatas');
  }


  ngOnInit() {
  }

  nextStep(persons: IPerson, path: string) {
    if (persons.russianBillTotal === null) {
      this.toastService.showToast('warning', 'Please input a cost', 4000)
    } else {
      if (persons.russianBillTotal == 0) {
        this.toastService.showToast('warning', 'Please input a cost above $0', 4000)
      }
    }
    if (persons.russianTip === null) {
      this.toastService.showToast('warning', 'Please input a tip!', 4000);
    } else {
      if (persons.russianTip) {
        this.toastService.showToast('warning', 'Please input a party amount above 0!', 4000);
      }
      if (persons.russianNames === null || persons.russianNames === '') {
        this.toastService.showToast('warning', "Please enter a person's name", 4000);
      } else {
        this.localStorageService.saveRussianDataToLocalStorage(persons);
        console.log("captured data----> ", persons);
        this.router.navigate(['final-page', persons]);
      }
    }
  }

  // saveItemsToLocalStorage(userdatas: Array<UserData>) {
  //   return this.localStorageService.saveItemsToLocalStorage(userdatas);
  //   // const savedData = localStorage.setItem(this.key, JSON.stringify(userdatas));
  //   // return savedData;
  // }

  saveRussianDataToLocalStorage(russiandatas: Array<RussianData>) {
    return this.localStorageService.saveItemsToLocalStorage(russiandatas);
  }

  saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.user));

  }

  addPerson() {
    const newPerson: RussianData = {
      russianNames: null
    }
    this.persons.push(newPerson);
    this.saveToLocalStorage();
  }

  deletePerson(index: number) {
    const newPerson: RussianData = {
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
