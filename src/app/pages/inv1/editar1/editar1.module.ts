import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Editar1RoutingModule } from './editar1-routing.module';
import { Editar1Component } from './editar1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticuloFormModule } from '../../../shared/components/articulo-form/articulo-form.module';


@NgModule({
  declarations: [Editar1Component],
  imports: [
    CommonModule,
    Editar1RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ArticuloFormModule
  ]
})
export class Editar1Module { }
