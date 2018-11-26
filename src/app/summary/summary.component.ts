import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorageService';
import { IUserData } from '../user-data/user.model';
import { UserData } from '../user-data/user.model';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  user: IUserData = { mealCost: 0, amountInParty: 0, givingTip: false, tipAmount: 0 };
  localStorageService: LocalStorageService<UserData>;
 

  constructor(private router: Router) { }

  goToPage(path: string) {
    console.log('from goToPage path: ', path);
    this.router.navigate([path]);
  }
  ngOnInit() {
  }

}
