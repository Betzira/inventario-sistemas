import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacelComponent } from './listacel.component';

const routes: Routes = [{ path: '', component: ListacelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListacelRoutingModule { }
