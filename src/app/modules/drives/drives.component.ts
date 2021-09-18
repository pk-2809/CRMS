import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.css']
})

export class DrivesComponent implements OnInit {

  // color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
  value1 = 55;
  constructor() { }

  ngOnInit(): void {
  }

}
