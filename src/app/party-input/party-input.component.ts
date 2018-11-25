import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData } from '../user-data/user.model';

@Component({
  selector: 'app-party-input',
  templateUrl: './party-input.component.html',
  styleUrls: ['./party-input.component.css']
})
export class PartyInputComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // goToPage(path: string) {
  //   console.log('from goToPage path: ',path);
  //   this.router.navigate([path]);
  // }

  nextStep(user: IUserData, path: string) {
    console.log("from userInput, user: ", user);
    if (user.amountInParty === null) {
      console.log('show toast here 2');
    } else {
      if (user.amountInParty === 0) {
        console.log('show toast here');
      } else {
        this.router.navigate(['']);
      }
    }

  }

}
