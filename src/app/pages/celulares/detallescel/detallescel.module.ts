import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallescelRoutingModule } from './detallescel-routing.module';
import { DetallescelComponent } from './detallescel.component';


@NgModule({
  declarations: [DetallescelComponent],
  imports: [
    CommonModule,
    DetallescelRoutingModule
  ]
})
export class DetallescelModule { }
