import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesswiRoutingModule } from './detallesswi-routing.module';
import { DetallesswiComponent } from './detallesswi.component';


@NgModule({
  declarations: [DetallesswiComponent],
  imports: [
    CommonModule,
    DetallesswiRoutingModule
  ]
})
export class DetallesswiModule { }
