import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoantRoutingModule } from './nuevoant-routing.module';
import { NuevoantComponent } from './nuevoant.component';

import { AntenasFormModule } from '../../../shared/components/antenas-form/antenas-form.module';

@NgModule({
  declarations: [NuevoantComponent],
  imports: [
    CommonModule,
    NuevoantRoutingModule,
    AntenasFormModule
  ]
})
export class NuevoantModule { }
