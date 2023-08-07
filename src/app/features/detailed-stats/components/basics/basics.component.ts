import {Component, Input, SimpleChanges} from '@angular/core';

import {StatsMap} from '../../../general-stats/models/models';
import {STAT_NAME} from '../stat-item/stat-item.component';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {
  @Input() public statsMap: StatsMap;

  public statsList: STAT_NAME[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['statsMap']) {
      this.statsList = [
        STAT_NAME.HP,
        STAT_NAME.MALE_DAMAGE,
        STAT_NAME.UNARMED,
        STAT_NAME.MP
      ];
    }
  }
}
