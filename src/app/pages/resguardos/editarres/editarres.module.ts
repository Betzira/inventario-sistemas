import { ResguardosFormModule } from './../../../shared/components/resguardos-form/resguardos-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarresRoutingModule } from './editarres-routing.module';
import { EditarresComponent } from './editarres.component';


@NgModule({
  declarations: [EditarresComponent],
  imports: [
    CommonModule,
    EditarresRoutingModule,
    ResguardosFormModule
  ]
})
export class EditarresModule { }
