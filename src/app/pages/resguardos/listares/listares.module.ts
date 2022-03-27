import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaresRoutingModule } from './listares-routing.module';
import { ListaresComponent } from './listares.component';


@NgModule({
  declarations: [ListaresComponent],
  imports: [
    CommonModule,
    ListaresRoutingModule
  ]
})
export class ListaresModule { }
