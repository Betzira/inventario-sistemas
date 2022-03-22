import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoimpComponent } from './nuevoimp.component';

const routes: Routes = [{ path: '', component: NuevoimpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoimpRoutingModule { }
