import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarantRoutingModule } from './editarant-routing.module';
import { EditarantComponent } from './editarant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AntenasFormModule } from 'src/app/shared/components/antenas-form/antenas-form.module';


@NgModule({
  declarations: [EditarantComponent],
  imports: [
    CommonModule,
    EditarantRoutingModule,
    ReactiveFormsModule,
    AntenasFormModule
  ]
})
export class EditarantModule { }
