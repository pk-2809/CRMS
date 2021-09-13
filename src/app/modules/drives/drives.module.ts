import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivesRoutingModule } from './drives-routing.module';
import { DrivesComponent } from './drives.component';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from "../../shared/angular-material/angular-material.module";

@NgModule({
  declarations: [
    DrivesComponent
  ],
  imports: [
    CommonModule,
    DrivesRoutingModule,
    SharedModule,
    AngularMaterialModule
  ],
  exports:[
    SharedModule
  ]
})
export class DrivesModule { }
