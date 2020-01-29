import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageGenerationPage } from './image-generation.page';

const routes: Routes = [
  {
    path: '',
    component: ImageGenerationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageGenerationPageRoutingModule {}
