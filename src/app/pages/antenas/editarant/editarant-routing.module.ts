import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarantComponent } from './editarant.component';

const routes: Routes = [{ path: '', component: EditarantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarantRoutingModule { }
