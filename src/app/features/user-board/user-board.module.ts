import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBoardComponent } from './components/user-board.component';
import {GeneralStatsModule} from '../general-stats/general-stats.module';
import {DetailedStatsModule} from '../detailed-stats/detailed-stats.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {DiceRollerModule} from '../dice-roller/dice-roller.module';



@NgModule({
  declarations: [
    UserBoardComponent
  ],
  exports: [UserBoardComponent],
  imports: [
    CommonModule,
    GeneralStatsModule,
    DetailedStatsModule,
    MatButtonModule,
    MatCardModule,
    DiceRollerModule
  ]
})
export class UserBoardModule { }
