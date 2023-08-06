import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GeneralStatsComponent} from './features/general-stats/components/general-stats.component';
import {AdminBoardComponent} from './features/admin/components/admin-board.component';
import {ImportPageComponent} from './features/admin/components/import-page/import-page.component';

const routes: Routes = [
  {
    path: 'rpgorganizer',
    children: [
      {
        path: 'stats',
        component: GeneralStatsComponent,
      },
      {
        path: 'admin',
        children: [
          {
            path: 'board',
            component: AdminBoardComponent,
          },
          {
            path: 'import',
            component: ImportPageComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'board'
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'stats'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'rpgorganizer',
  },
  {
    path: '**',
    redirectTo: 'rpgorganizer',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
