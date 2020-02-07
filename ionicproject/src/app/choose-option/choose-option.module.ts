import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseOptionPageRoutingModule } from './choose-option-routing.module';

import { ChooseOptionPage } from './choose-option.page';
import { PopoverComponent } from '../popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseOptionPageRoutingModule
  ],
  entryComponents:[PopoverComponent],
  declarations: [ChooseOptionPage,PopoverComponent]
})
export class ChooseOptionPageModule {}
