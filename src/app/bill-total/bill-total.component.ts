import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorageService';
import { IUserData } from '../user-data/user.model';
import { UserData } from '../user-data/user.model';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-bill-total',
  templateUrl: './bill-total.component.html',
  styleUrls: ['./bill-total.component.css']
})
export class BillTotalComponent implements OnInit {

  user: IUserData = { mealCost: null, amountInParty: null, tipAmount: null };
  localStorageService: LocalStorageService<UserData>;

  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('userdatas');
  }


  // goToPage(path: string) {
  //   console.log('from goToPage path: ', path);
  //   this.router.navigate([path]);
  // }

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
        this.router.navigate(['party-input', user]);
      }
    }

  }

  previousStep(user: IUserData, path: string) {
    //  this.localStorageService.saveItemsToLocalStorage(user);
    this.router.navigate(['']);
  }

  saveItemsToLocalStorage(userdatas: Array<UserData>) {
    return this.localStorageService.saveItemsToLocalStorage(userdatas);
    // const savedData = localStorage.setItem(this.key, JSON.stringify(userdatas));
    // return savedData;
  }

  getItemsFromLocalStorage() {
    return this.localStorageService.getItemsFromLocalStorage();
    // const savedData = JSON.parse(localStorage.getItem(this.key));
    // return savedData;
  }



}
