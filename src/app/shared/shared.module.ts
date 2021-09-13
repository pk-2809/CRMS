import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    LeftNavComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports:[
    LeftNavComponent,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
