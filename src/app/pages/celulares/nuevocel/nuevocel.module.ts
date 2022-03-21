import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevocelRoutingModule } from './nuevocel-routing.module';
import { NuevocelComponent } from './nuevocel.component';
import { CelularesFormModule } from '../../../shared/components/celulares-form/celulares-form.module';


@NgModule({
  declarations: [NuevocelComponent],
  imports: [
    CommonModule,
    NuevocelRoutingModule,
    CelularesFormModule
  ]
})
export class NuevocelModule { }
