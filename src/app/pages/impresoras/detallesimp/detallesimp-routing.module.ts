import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesimpComponent } from './detallesimp.component';

const routes: Routes = [{ path: '', component: DetallesimpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesimpRoutingModule { }
