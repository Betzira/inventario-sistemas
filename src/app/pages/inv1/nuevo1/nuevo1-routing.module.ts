import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nuevo1Component } from './nuevo1.component';

const routes: Routes = [{ path: '', component: Nuevo1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Nuevo1RoutingModule { }
