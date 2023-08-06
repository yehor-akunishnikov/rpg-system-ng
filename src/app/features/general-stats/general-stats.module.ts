import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

import {GeneralStatsComponent} from './components/general-stats.component';
import {CharacterNameInputComponent} from './components/character-name-input/character-name-input.component';
import {StatsTableComponent} from './components/stats-table/stats-table.component';
import {GeneralStatsStateService} from './service/general-stats-state.service';
import {
  StatDescriptionModalComponent
} from './components/stat-description-modal/components/stat-description-modal.component';
import {StatDescriptionModalService} from './service/stat-description-modal.service';
import {
  StatDescriptionComponent
} from './components/stat-description-modal/components/stat-description/stat-description.component';

@NgModule({
  declarations: [
    GeneralStatsComponent,
    CharacterNameInputComponent,
    StatsTableComponent,
    StatDescriptionModalComponent,
    StatDescriptionComponent,
  ],
  exports: [
    GeneralStatsComponent,
    StatsTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [GeneralStatsStateService, StatDescriptionModalService]
})
export class GeneralStatsModule {
}
