import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseOptionPage } from './choose-option.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseOptionPageRoutingModule {}
