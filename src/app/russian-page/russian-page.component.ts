import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
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
  persons: Array<IPerson> = [];
  user: IUserData = {
    mealCost: null,
    amountInParty: null,
    givingTip: null,
    tipAmount: null,
    userNames: null
  };
  localStorageService: LocalStorageService<UserData>;
  constructor() { }

  ngOnInit() {
  }

  saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.user));

  }

  addPerson() {
    const newPerson: IPerson = {
      russianNames: null
    }
    this.persons.unshift(newPerson);
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
