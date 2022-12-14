import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contrasena',
    loadChildren: () => import('./contrasena/contrasena.module').then( m => m.ContrasenaPageModule)
  },
  {
    path: 'crearviaje',
    loadChildren: () => import('./crearviaje/crearviaje.module').then( m => m.CrearviajePageModule)
  },
  {
    path: 'buscarviaje',
    loadChildren: () => import('./buscarviaje/buscarviaje.module').then( m => m.BuscarviajePageModule)
  },
  {
    path: 'top-choferes',
    loadChildren: () => import('./top-choferes/top-choferes.module').then( m => m.TopChoferesPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
