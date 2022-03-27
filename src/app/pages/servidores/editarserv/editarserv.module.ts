import { ServidoresFormModule } from './../../../shared/components/servidores-form/servidores-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarservRoutingModule } from './editarserv-routing.module';
import { EditarservComponent } from './editarserv.component';


@NgModule({
  declarations: [EditarservComponent],
  imports: [
    CommonModule,
    EditarservRoutingModule,
    ServidoresFormModule
  ]
})
export class EditarservModule { }
