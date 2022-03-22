import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaswiRoutingModule } from './listaswi-routing.module';
import { ListaswiComponent } from './listaswi.component';


@NgModule({
  declarations: [ListaswiComponent],
  imports: [
    CommonModule,
    ListaswiRoutingModule
  ]
})
export class ListaswiModule { }
