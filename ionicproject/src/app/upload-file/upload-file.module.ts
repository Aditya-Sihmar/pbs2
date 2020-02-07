import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadFilePageRoutingModule } from './upload-file-routing.module';

import { UploadFilePage } from './upload-file.page';
//import { PopoverComponent } from '../popover/popover.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadFilePageRoutingModule
  ],
  //entryComponents:[PopoverComponent],
  declarations: [UploadFilePage,//PopoverComponent
  ]

})
export class UploadFilePageModule {}
