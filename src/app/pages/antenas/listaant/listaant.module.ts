import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaantRoutingModule } from './listaant-routing.module';
import { ListaantComponent } from './listaant.component';


@NgModule({
  declarations: [ListaantComponent],
  imports: [
    CommonModule,
    ListaantRoutingModule
  ]
})
export class ListaantModule { }
