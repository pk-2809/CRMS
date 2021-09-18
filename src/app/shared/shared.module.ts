import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableModule } from "../shared/components/table/table.module";

@NgModule({
  declarations: [
    LeftNavComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TableModule,
  ],
  exports: [
    LeftNavComponent,
    FlexLayoutModule,
    TableModule,
  ]
})
export class SharedModule { }
