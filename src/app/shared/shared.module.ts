import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableModule } from "../shared/components/table/table.module";
import { CardsModule } from "../shared/components/cards/cards.module";
@NgModule({
  declarations: [
    LeftNavComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TableModule,
    CardsModule,
  ],
  exports: [
    LeftNavComponent,
    FlexLayoutModule,
    TableModule,
    CardsModule,
  ]
})
export class SharedModule { }
