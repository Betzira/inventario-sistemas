import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoimpRoutingModule } from './nuevoimp-routing.module';
import { NuevoimpComponent } from './nuevoimp.component';
import { ImpresorasFormModule } from '../../../shared/components/impresoras-form/impresoras-form.module';


@NgModule({
  declarations: [NuevoimpComponent],
  imports: [
    CommonModule,
    NuevoimpRoutingModule,
    ImpresorasFormModule
  ]
})
export class NuevoimpModule { }
