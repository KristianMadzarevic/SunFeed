import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { CityGuard } from './guards/city.guard';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', redirectTo: 'weather', pathMatch: 'full' },
      {
        path: 'weather',
        loadChildren: () =>
          import('./../main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'weather/favorites',
        loadChildren: () =>
          import('./../favorite/favorite.module').then((m) => m.FavoriteModule),
      },
      {
        path: 'weather/:city',
        loadChildren: () =>
          import('./../city/city.module').then((m) => m.CityModule),
          canActivate: [CityGuard]
      },
      {
        path: 'weather/:city/:day',
        loadChildren: () =>
          import('./../day/day.module').then((m) => m.DayModule),
          canActivate: [CityGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
