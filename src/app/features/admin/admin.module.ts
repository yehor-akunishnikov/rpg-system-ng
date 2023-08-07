import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminBoardComponent} from './components/admin-board.component';
import {MatCardModule} from '@angular/material/card';
import {GeneralStatsModule} from '../general-stats/general-stats.module';
import { ImportPageComponent } from './components/import-page/import-page.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {GeneralStatsStateService} from '../general-stats/service/general-stats-state.service';
import {DetailedStatsModule} from '../detailed-stats/detailed-stats.module';

@NgModule({
  declarations: [
    AdminBoardComponent,
    ImportPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    GeneralStatsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    DetailedStatsModule
  ],
  providers: [GeneralStatsStateService]
})
export class AdminModule {
}
