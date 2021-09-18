import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
const allMatModules = [

  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatPaginatorModule,
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...allMatModules,
  ],
  exports: [
    ...allMatModules,
  ]
})
export class AngularMaterialModule { }
