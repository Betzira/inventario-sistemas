import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesservRoutingModule } from './detallesserv-routing.module';
import { DetallesservComponent } from './detallesserv.component';


@NgModule({
  declarations: [DetallesservComponent],
  imports: [
    CommonModule,
    DetallesservRoutingModule
  ]
})
export class DetallesservModule { }
