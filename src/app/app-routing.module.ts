import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './componentes/post/post.component';
import { PhotosComponent } from './componentes/photos/photos.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
