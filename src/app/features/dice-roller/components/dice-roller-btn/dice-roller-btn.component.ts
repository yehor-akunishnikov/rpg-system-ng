import {Component, Input} from '@angular/core';

import {DiceRollerModalService} from '../../services/dice-roller-modal.service';
import {StatsMap} from '../../../general-stats/models/models';

@Component({
  selector: 'app-dice-roller-btn',
  templateUrl: './dice-roller-btn.component.html',
  styleUrls: ['./dice-roller-btn.component.scss'],
})
export class DiceRollerBtnComponent {
  @Input() public statsMap: StatsMap;

  constructor(
    public diceRollerModalService: DiceRollerModalService,
  ) {
  }
}
