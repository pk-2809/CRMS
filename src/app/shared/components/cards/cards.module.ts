import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { AngularMaterialModule } from "../../angular-material/angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    CardsComponent,
  ]
})
export class CardsModule { }
