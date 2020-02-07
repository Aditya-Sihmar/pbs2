import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageGenerationPageRoutingModule } from './image-generation-routing.module';

import { ImageGenerationPage } from './image-generation.page';
//import { PopoverComponent } from '../popover/popover.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageGenerationPageRoutingModule
  ],
  //entryComponents:[PopoverComponent],
  declarations: [ImageGenerationPage,//PopoverComponent]
  ]
})
export class ImageGenerationPageModule {}
