import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaservComponent } from './listaserv.component';

const routes: Routes = [{ path: '', component: ListaservComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaservRoutingModule { }
