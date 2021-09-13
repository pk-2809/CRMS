import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  clickable(event:any)
  {
    if(event.path[1].id == '101')
    {
      this.router.navigate(['/dashboard']);
    }
    if(event.path[1].id == '102')
    {
      this.router.navigate(['/drives']);
    }
  }
}
