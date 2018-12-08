import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { UserData } from '../user-data/user.model';
import { ToastService } from '../toast/toast.service';
import { Router, ActivatedRoute } from '@angular/router';


export interface IPerson {
  russianBillTotal?: number;
  russianTip?: number;
  russianNames: string;
}
@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})
export class FinalPageComponent implements OnInit {

  user: any = {};
  localStorageService: LocalStorageService<UserData>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private toastService: ToastService) { 
    this.localStorageService = new LocalStorageService('userdatas');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((sss)=> {
      this.user = sss;
      console.log('this.user from previous page....', this.user);
    });
  }

  persons: Array<IPerson> = [];





  displayNames(){
    for (let i = 0; i < this.persons.length; i++) {
      console.log ('i ---> ', i, "this.persons[i]", this.persons[i]);
    }
  }

}
