import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista1RoutingModule } from './lista1-routing.module';
import { Lista1Component } from './lista1.component';


@NgModule({
  declarations: [Lista1Component],
  imports: [
    CommonModule,
    Lista1RoutingModule
  ]
})
export class Lista1Module { }
