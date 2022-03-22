import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarimpRoutingModule } from './editarimp-routing.module';
import { EditarimpComponent } from './editarimp.component';
import { ImpresorasFormModule } from '../../../shared/components/impresoras-form/impresoras-form.module';


@NgModule({
  declarations: [EditarimpComponent],
  imports: [
    CommonModule,
    EditarimpRoutingModule,
    ImpresorasFormModule
  ]
})
export class EditarimpModule { }
