import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo:'/inicio', pathMatch:'full' },
  
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) }, 
  
  { path: 'lista1', loadChildren: () => import('./pages/inv1/lista1/lista1.module').then(m => m.Lista1Module) }, 
  
  { path: 'detalles1', loadChildren: () => import('./pages/inv1/detalles1/detalles1.module').then(m => m.Detalles1Module) }, 
  
  { path: 'editar1', loadChildren: () => import('./pages/inv1/editar1/editar1.module').then(m => m.Editar1Module) }, 
  
  { path: 'nuevo1', loadChildren: () => import('./pages/inv1/nuevo1/nuevo1.module').then(m => m.Nuevo1Module) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
