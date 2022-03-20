import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Detalles1RoutingModule } from './detalles1-routing.module';
import { Detalles1Component } from './detalles1.component';


@NgModule({
  declarations: [Detalles1Component],
  imports: [
    CommonModule,
    Detalles1RoutingModule
  ]
})
export class Detalles1Module { }
