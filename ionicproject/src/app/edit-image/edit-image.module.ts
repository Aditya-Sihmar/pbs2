import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditImagePageRoutingModule } from './edit-image-routing.module';

import { EditImagePage } from './edit-image.page';
//import { PopoverComponent } from '../popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditImagePageRoutingModule
  ],
  //entryComponents:[PopoverComponent],
  declarations: [EditImagePage,//PopoverComponent]
]
})
export class EditImagePageModule {}
