import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarcelRoutingModule } from './editarcel-routing.module';
import { EditarcelComponent } from './editarcel.component';
import { CelularesFormModule } from 'src/app/shared/components/celulares-form/celulares-form.module';


@NgModule({
  declarations: [EditarcelComponent],
  imports: [
    CommonModule,
    EditarcelRoutingModule,
    CelularesFormModule
  ]
})
export class EditarcelModule { }
