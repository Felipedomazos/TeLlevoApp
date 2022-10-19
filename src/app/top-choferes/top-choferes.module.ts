import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopChoferesPageRoutingModule } from './top-choferes-routing.module';

import { TopChoferesPage } from './top-choferes.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopChoferesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TopChoferesPage]
})
export class TopChoferesPageModule {}
