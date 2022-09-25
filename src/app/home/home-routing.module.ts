import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AccesoHoraGuard } from '../guards/acceso-hora.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [AccesoHoraGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
