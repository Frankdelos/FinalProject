import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { UserData } from '../user-data/user.model';
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
  person: Array<IPerson> = [];
  user: IUserData = {
     mealCost: null,
      amountInParty: null, 
      givingTip: null, 
      tipAmount: null, 
      userNames: null };
  localStorageService: LocalStorageService<UserData>;
  constructor(private router: Router,) { }

  ngOnInit() {
  }

  saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.user));

  }

  addPerson(){
    this.editMode2 = true;
    const person : IPerson = {
      russianNames: null
    }
    console.log('from addPerson');
    this.person.push(person);
    this.saveToLocalStorage();

  }

  addTip(){
    this.editMode = true;
    console.log('from addTip');
  }

  returnHome(){
    this.router.navigate(['home']);

  }

}
