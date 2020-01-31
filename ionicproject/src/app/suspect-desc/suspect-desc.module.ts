import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuspectDescPageRoutingModule } from './suspect-desc-routing.module';

import { SuspectDescPage } from './suspect-desc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuspectDescPageRoutingModule
  ],
  declarations: [SuspectDescPage]
})
export class SuspectDescPageModule {}
