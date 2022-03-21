import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesantRoutingModule } from './detallesant-routing.module';
import { DetallesantComponent } from './detallesant.component';


@NgModule({
  declarations: [DetallesantComponent],
  imports: [
    CommonModule,
    DetallesantRoutingModule
  ]
})
export class DetallesantModule { }
