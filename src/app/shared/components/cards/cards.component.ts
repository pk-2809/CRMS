import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  drives;
  constructor() { }

  ngOnInit(): void {
    this.drives = ["Volvo", "BMW", "Saab", "Volvo", "BMW", "Volvo", "BMW", "Saab", "Volvo", "BMW", "Saab", "Volvo"];
    // console.log(this.drives)
  }

}
