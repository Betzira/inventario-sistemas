import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesresRoutingModule } from './detallesres-routing.module';
import { DetallesresComponent } from './detallesres.component';


@NgModule({
  declarations: [DetallesresComponent],
  imports: [
    CommonModule,
    DetallesresRoutingModule
  ]
})
export class DetallesresModule { }
