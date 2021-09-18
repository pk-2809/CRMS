import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { AngularMaterialModule } from "../../angular-material/angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
// import { SharedModule } from "../../shared.module";
@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    TableComponent,
    // SharedModule
  ]
})
export class TableModule { }
