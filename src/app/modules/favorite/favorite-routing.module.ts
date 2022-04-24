import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  { path: '', component: FavoriteComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule { }
