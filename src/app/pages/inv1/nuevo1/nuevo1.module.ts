import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Nuevo1RoutingModule } from './nuevo1-routing.module';
import { Nuevo1Component } from './nuevo1.component';
import { ArticuloFormModule } from '../../../shared/components/articulo-form/articulo-form.module';


@NgModule({
  declarations: [Nuevo1Component],
  imports: [
    CommonModule,
    Nuevo1RoutingModule,
    ArticuloFormModule
  ]
})
export class Nuevo1Module { }
