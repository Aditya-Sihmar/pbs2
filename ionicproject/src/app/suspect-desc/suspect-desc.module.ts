import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuspectDescPageRoutingModule } from './suspect-desc-routing.module';

import { SuspectDescPage } from './suspect-desc.page';
//import { PopoverComponent } from '../popover/popover.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuspectDescPageRoutingModule
  ],
  //entryComponents:[PopoverComponent],
  declarations: [SuspectDescPage,//PopoverComponent]
]
})
export class SuspectDescPageModule {}
