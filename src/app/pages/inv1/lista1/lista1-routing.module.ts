import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lista1Component } from './lista1.component';

const routes: Routes = [{ path: '', component: Lista1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lista1RoutingModule { }
