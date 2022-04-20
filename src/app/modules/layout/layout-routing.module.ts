import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';

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
        path: 'weather/:city',
        loadChildren: () =>
          import('./../city/city.module').then((m) => m.CityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
