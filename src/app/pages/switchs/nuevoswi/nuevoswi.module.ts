import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoswiRoutingModule } from './nuevoswi-routing.module';
import { NuevoswiComponent } from './nuevoswi.component';
import { SwitchsFormModule } from '../../../shared/components/switchs-form/switchs-form.module';


@NgModule({
  declarations: [NuevoswiComponent],
  imports: [
    CommonModule,
    NuevoswiRoutingModule,
    SwitchsFormModule
  ]
})
export class NuevoswiModule { }
