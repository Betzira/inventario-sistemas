import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaswiComponent } from './listaswi.component';

const routes: Routes = [{ path: '', component: ListaswiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaswiRoutingModule { }
