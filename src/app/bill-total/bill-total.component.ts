import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-total',
  templateUrl: './bill-total.component.html',
  styleUrls: ['./bill-total.component.css']
})
export class BillTotalComponent implements OnInit {

  constructor(private router: Router) { }
  
  
  goToPage(path: string) {
    console.log('from goToPage path: ',path);
    this.router.navigate([path]);
  }

  ngOnInit() {
  }


}
