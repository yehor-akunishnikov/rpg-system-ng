import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DetailedStatsComponent} from './components/detailed-stats.component';
import {StatItemComponent} from './components/stat-item/stat-item.component';
import {MatCardModule} from '@angular/material/card';
import { PerksComponent } from './components/perks/perks.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BasicsComponent } from './components/basics/basics.component';
import { SpellsComponent } from './components/spells/spells.component';

@NgModule({
  declarations: [
    DetailedStatsComponent,
    StatItemComponent,
    PerksComponent,
    BasicsComponent,
    SpellsComponent,
  ],
  exports: [DetailedStatsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule
  ]
})
export class DetailedStatsModule {
}
