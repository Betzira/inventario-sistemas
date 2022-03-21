import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaantComponent } from './listaant.component';

const routes: Routes = [{ path: '', component: ListaantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaantRoutingModule { }
