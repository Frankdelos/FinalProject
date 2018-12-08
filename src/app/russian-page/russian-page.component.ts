import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { UserData } from '../user-data/user.model';
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
  persons: Array<IPerson> = [];
  user: IUserData = {
    mealCost: null,
    amountInParty: null,
    givingTip: null,
    tipAmount: null,
    userNames: ''
  };
  localStorageService: LocalStorageService<UserData>;
  constructor(private router: Router, private toastService: ToastService) { 
    this.localStorageService = new LocalStorageService('userdatas');
  }


  ngOnInit() {
  }

  nextStep(user: IUserData, path: string) {
    if (user.mealCost === null) {
      this.toastService.showToast('warning', 'Please input a cost', 4000)
    } else {
      if (user.mealCost == 0) {
        this.toastService.showToast('warning', 'Please input a cost above $0', 4000)
      } else {
        this.localStorageService.saveItemsToLocalStorage(user);
        this.router.navigate(['final-page', user]);
      }
    }

    

  }
  saveItemsToLocalStorage(userdatas: Array<UserData>) {
    return this.localStorageService.saveItemsToLocalStorage(userdatas);
    // const savedData = localStorage.setItem(this.key, JSON.stringify(userdatas));
    // return savedData;
  }

  saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.user));

  }

  addPerson() {
    const newPerson: IPerson = {
      russianNames: null
    }
    this.persons.push(newPerson);
    this.saveToLocalStorage();

    for (let i = 0; i < this.persons.length; i++) {
      console.log ('i ---> ', i, "this.persons[i]", this.persons[i]);
    }
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
