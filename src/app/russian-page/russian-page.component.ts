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
  x = false;
  index = 1;
  editMode2: boolean = false;
  person: Array<IPerson> = [];
  user: IUserData = {
     mealCost: null,
      amountInParty: null, 
      givingTip: null, 
      tipAmount: null, 
      userNames: null };
  localStorageService: LocalStorageService<UserData>;
  constructor() { }

  ngOnInit() {
  }

  saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.user));

  }

  addPerson(){
      for (let i = 1; i< 100; i++) {
      const person: IPerson = {
        russianNames: null
      }
    };
    this.person.unshift(person);
    this.saveToLocalStorage();  
    }


    
    
  addTip(){
    this.editMode = true;
    console.log('from addTip');
  }

}
