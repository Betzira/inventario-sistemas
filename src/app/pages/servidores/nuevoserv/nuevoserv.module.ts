import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoservRoutingModule } from './nuevoserv-routing.module';
import { NuevoservComponent } from './nuevoserv.component';
import { ServidoresFormModule } from '../../../shared/components/servidores-form/servidores-form.module';


@NgModule({
  declarations: [NuevoservComponent],
  imports: [
    CommonModule,
    NuevoservRoutingModule,
    ServidoresFormModule
  ]
})
export class NuevoservModule { }
