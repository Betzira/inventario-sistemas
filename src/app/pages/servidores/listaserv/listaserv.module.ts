import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaservRoutingModule } from './listaserv-routing.module';
import { ListaservComponent } from './listaserv.component';


@NgModule({
  declarations: [ListaservComponent],
  imports: [
    CommonModule,
    ListaservRoutingModule
  ]
})
export class ListaservModule { }
