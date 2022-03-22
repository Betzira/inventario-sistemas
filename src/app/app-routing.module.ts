import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo:'/inicio', pathMatch:'full' },
  
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) }, 
  
  { path: 'lista1', loadChildren: () => import('./pages/inv1/lista1/lista1.module').then(m => m.Lista1Module) }, 
  
  { path: 'detalles1', loadChildren: () => import('./pages/inv1/detalles1/detalles1.module').then(m => m.Detalles1Module) }, 
  
  { path: 'editar1', loadChildren: () => import('./pages/inv1/editar1/editar1.module').then(m => m.Editar1Module) }, 
  
  { path: 'nuevo1', loadChildren: () => import('./pages/inv1/nuevo1/nuevo1.module').then(m => m.Nuevo1Module) },

  { path: 'nuevoant', loadChildren: () => import('./pages/antenas/nuevoant/nuevoant.module').then(m => m.NuevoantModule) },

  { path: 'listaant', loadChildren: () => import('./pages/antenas/listaant/listaant.module').then(m => m.ListaantModule) },

  { path: 'editarant', loadChildren: () => import('./pages/antenas/editarant/editarant.module').then(m => m.EditarantModule) },

  { path: 'detallesant', loadChildren: () => import('./pages/antenas/detallesant/detallesant.module').then(m => m.DetallesantModule) },

  { path: 'detallescel', loadChildren: () => import('./pages/celulares/detallescel/detallescel.module').then(m => m.DetallescelModule) },

  { path: 'editarcel', loadChildren: () => import('./pages/celulares/editarcel/editarcel.module').then(m => m.EditarcelModule) },

  { path: 'listacel', loadChildren: () => import('./pages/celulares/listacel/listacel.module').then(m => m.ListacelModule) },

  { path: 'nuevocel', loadChildren: () => import('./pages/celulares/nuevocel/nuevocel.module').then(m => m.NuevocelModule) },

  { path: 'detallesimp', loadChildren: () => import('./pages/impresoras/detallesimp/detallesimp.module').then(m => m.DetallesimpModule) },

  { path: 'editarimp', loadChildren: () => import('./pages/impresoras/editarimp/editarimp.module').then(m => m.EditarimpModule) },

  { path: 'listaimp', loadChildren: () => import('./pages/impresoras/listaimp/listaimp.module').then(m => m.ListaimpModule) },

  { path: 'nuevoimp', loadChildren: () => import('./pages/impresoras/nuevoimp/nuevoimp.module').then(m => m.NuevoimpModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
