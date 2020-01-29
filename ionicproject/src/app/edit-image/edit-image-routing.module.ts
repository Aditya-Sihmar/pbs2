import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditImagePage } from './edit-image.page';

const routes: Routes = [
  {
    path: '',
    component: EditImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditImagePageRoutingModule {}
