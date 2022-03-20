import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detalles1Component } from './detalles1.component';

const routes: Routes = [{ path: '', component: Detalles1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalles1RoutingModule { }
