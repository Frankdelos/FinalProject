import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party-input',
  templateUrl: './party-input.component.html',
  styleUrls: ['./party-input.component.css']
})
export class PartyInputComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(path: string) {
    console.log('from goToPage path: ',path);
    this.router.navigate([path]);
  }

}
