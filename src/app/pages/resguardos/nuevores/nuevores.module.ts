import { ResguardosFormModule } from './../../../shared/components/resguardos-form/resguardos-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoresRoutingModule } from './nuevores-routing.module';
import { NuevoresComponent } from './nuevores.component';


@NgModule({
  declarations: [NuevoresComponent],
  imports: [
    CommonModule,
    NuevoresRoutingModule,
    ResguardosFormModule
  ]
})
export class NuevoresModule { }
