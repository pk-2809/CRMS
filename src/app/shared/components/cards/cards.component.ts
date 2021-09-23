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
    this.drives = ["HCL Technologies", "Wipro Limited", "Redington India Ltd", "Tech Mahindra Ltd", "Infosys", "Tata Consultancy service", "Larsen & Toubro Infotech Ltd", "Oracle Financial Services Software", "Mindtree", "Accel Frontline", "Atom Technologies", "Coforge"];
    // console.log(this.drives)
  }

}
