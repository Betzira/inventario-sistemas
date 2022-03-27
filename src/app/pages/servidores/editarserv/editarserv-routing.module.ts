import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarservComponent } from './editarserv.component';

const routes: Routes = [{ path: '', component: EditarservComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarservRoutingModule { }
