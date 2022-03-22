import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarswiRoutingModule } from './editarswi-routing.module';
import { EditarswiComponent } from './editarswi.component';
import { SwitchsFormModule } from '../../../shared/components/switchs-form/switchs-form.module';


@NgModule({
  declarations: [EditarswiComponent],
  imports: [
    CommonModule,
    EditarswiRoutingModule,
    SwitchsFormModule
  ]
})
export class EditarswiModule { }
