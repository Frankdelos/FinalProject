import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { Person } from '../user-data/user.model';
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
  persons: Array<Person> = [];
  users: Array<IUserData> = [{
    mealCost: null,
    amountInParty: null,
    tipAmount: null,
    userNames: null
  }];
  localStorageService: LocalStorageService<Person>;
  constructor(private router: Router, private toastService: ToastService) { 
    this.localStorageService = new LocalStorageService('userdatas');
  }


  ngOnInit() {
  }

  nextStep(persons: IPerson, path: string) {
    if (persons.russianBillTotal === null) {
      this.toastService.showToast('warning', 'Please input a cost', 4000)
    } else {
      if (persons.russianBillTotal == 0) {
        this.toastService.showToast('warning', 'Please input a cost above $0', 4000)
      } else {
        this.localStorageService.saveItemsToLocalStorage(persons);
        this.router.navigate(['final-page', persons]);
      }
    }

  }
  // saveItemsToLocalStorage(userdatas: Array<UserData>) {
  //   return this.localStorageService.saveItemsToLocalStorage(userdatas);
  //   // const savedData = localStorage.setItem(this.key, JSON.stringify(userdatas));
  //   // return savedData;
  // }

  saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.persons));

  }

  addPerson() {
    // const newPerson: IPerson = {
    // russianNames: null
    // }
    // this.persons.push(newPerson);
    this.persons.push(new Person(null));
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
