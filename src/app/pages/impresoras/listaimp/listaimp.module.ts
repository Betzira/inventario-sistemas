import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaimpRoutingModule } from './listaimp-routing.module';
import { ListaimpComponent } from './listaimp.component';


@NgModule({
  declarations: [ListaimpComponent],
  imports: [
    CommonModule,
    ListaimpRoutingModule
  ]
})
export class ListaimpModule { }
