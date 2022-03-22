import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaimpComponent } from './listaimp.component';

const routes: Routes = [{ path: '', component: ListaimpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaimpRoutingModule { }
