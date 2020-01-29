import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageGenerationPageRoutingModule } from './image-generation-routing.module';

import { ImageGenerationPage } from './image-generation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageGenerationPageRoutingModule
  ],
  declarations: [ImageGenerationPage]
})
export class ImageGenerationPageModule {}
