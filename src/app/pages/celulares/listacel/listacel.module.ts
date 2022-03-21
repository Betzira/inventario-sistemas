import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListacelRoutingModule } from './listacel-routing.module';
import { ListacelComponent } from './listacel.component';


@NgModule({
  declarations: [ListacelComponent],
  imports: [
    CommonModule,
    ListacelRoutingModule
  ]
})
export class ListacelModule { }
