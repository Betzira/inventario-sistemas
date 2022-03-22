import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesimpRoutingModule } from './detallesimp-routing.module';
import { DetallesimpComponent } from './detallesimp.component';


@NgModule({
  declarations: [DetallesimpComponent],
  imports: [
    CommonModule,
    DetallesimpRoutingModule
  ]
})
export class DetallesimpModule { }
