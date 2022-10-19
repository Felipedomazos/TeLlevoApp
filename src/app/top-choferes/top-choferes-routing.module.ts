import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopChoferesPage } from './top-choferes.page';

const routes: Routes = [
  {
    path: '',
    component: TopChoferesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopChoferesPageRoutingModule {}
