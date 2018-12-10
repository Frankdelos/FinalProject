import { Component, OnInit } from '@angular/core';
import { IUserData } from '../user-data/user.model';
import { LocalStorageService } from '../localStorageService';
import { ToastService } from '../toast/toast.service';
import { Router } from '@angular/router';
import { UserData } from '../user-data/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})
export class FinalPageComponent implements OnInit {


  userParams = '';
  rand: number;
  currentUser: IUserData;
  users: Array<UserData> = [];

  
    
  localStorageService: LocalStorageService<UserData>;


  constructor(private router: Router, private toastService: ToastService, private activatedRoute: ActivatedRoute) {
    this.localStorageService = new LocalStorageService('userdatas');
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe((data: IUserData) => {
      console.log("data being transfered: ", data);
      this.currentUser = data;
      this.users = this.localStorageService.getItemsFromLocalStorage();
      this.rand = Math.floor(Math.random() * this.users.length);
      console.log("Newest random number --> ", this.rand);
    });
  }

  nextStep(users: IUserData, path: string) {
    this.localStorageService.clearItemFromLocalStorage();
    this.router.navigate(['home']);
  }


  previousStep(path: string) {
    this.router.navigate(['russian-page']);
  }


  randTest(){
    console.log('random number is: ', this.rand);
    var randomPerson = this.users[this.rand];
    console.log(this.users[this.rand]);
    

  }



}
