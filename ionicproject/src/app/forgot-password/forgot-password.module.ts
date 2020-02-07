import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
//import { PopoverComponent } from '../popover/popover.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule
  ],
  //entryComponents:[PopoverComponent],
  declarations: [ForgotPasswordPage,//PopoverComponent]
]
})
export class ForgotPasswordPageModule {}
