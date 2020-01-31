import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuspectDescPage } from './suspect-desc.page';

const routes: Routes = [
  {
    path: '',
    component: SuspectDescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuspectDescPageRoutingModule {}
