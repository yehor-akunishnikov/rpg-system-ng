import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import {DiceRollerBtnComponent} from './components/dice-roller-btn/dice-roller-btn.component';
import {DiceRollerModalComponent} from './components/dice-roller-modal/dice-roller-modal.component';
import {DiceRollerModalService} from './services/dice-roller-modal.service';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DiceRollerBtnComponent,
    DiceRollerModalComponent
  ],
  exports: [
    DiceRollerBtnComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [DiceRollerModalService]
})
export class DiceRollerModule {
}
