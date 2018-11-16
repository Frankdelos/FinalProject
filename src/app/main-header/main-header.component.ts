import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {


  constructor(private router: Router) {
  }

  goToPage(path: string) {
    console.log('from goToPage path: ',path);
    this.router.navigate([path]);
  }
  

  ngOnInit() {
  }

}
