import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopChoferesPageRoutingModule } from './top-choferes-routing.module';

import { TopChoferesPage } from './top-choferes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopChoferesPageRoutingModule
  ],
  declarations: [TopChoferesPage]
})
export class TopChoferesPageModule {}
