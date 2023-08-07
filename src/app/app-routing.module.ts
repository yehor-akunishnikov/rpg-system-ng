import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminBoardComponent} from './features/admin/components/admin-board.component';
import {ImportPageComponent} from './features/admin/components/import-page/import-page.component';
import {UserBoardComponent} from './features/user-board/components/user-board.component';

const routes: Routes = [
  {
    path: 'rpgorganizer',
    children: [
      {
        path: 'user',
        children: [
          {
            path: 'board',
            component: UserBoardComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'board'
          }
        ]
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
        redirectTo: 'user'
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
