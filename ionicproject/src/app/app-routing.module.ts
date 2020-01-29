import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'choose-option',
    loadChildren: () => import('./choose-option/choose-option.module').then( m => m.ChooseOptionPageModule)
  },
  {
    path: 'upload-file',
    loadChildren: () => import('./upload-file/upload-file.module').then( m => m.UploadFilePageModule)
  },  {
    path: 'image-generation',
    loadChildren: () => import('./image-generation/image-generation.module').then( m => m.ImageGenerationPageModule)
  },
  {
    path: 'edit-image',
    loadChildren: () => import('./edit-image/edit-image.module').then( m => m.EditImagePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
