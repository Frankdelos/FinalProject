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
  currentUser: IUserData;
  users: Array<IUserData> = [];
  localStorageService: LocalStorageService<UserData>;

  constructor(private router: Router, private toastService: ToastService, private activatedRoute: ActivatedRoute) {
    this.localStorageService = new LocalStorageService('userdatas');
  }

  async ngOnInit() {
  
  }

  nextStep(users: IUserData, path: string) {
    this.localStorageService.clearItemFromLocalStorage();
    this.router.navigate(['home']);
  }






  previousStep(path: string) {
    //  this.localStorageService.saveItemsToLocalStorage(user);
    this.router.navigate(['russian-page']);
  }



}
