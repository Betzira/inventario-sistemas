import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaresComponent } from './listares.component';

const routes: Routes = [{ path: '', component: ListaresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaresRoutingModule { }
