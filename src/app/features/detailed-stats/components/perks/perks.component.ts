import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {StatsMap} from '../../../general-stats/models/models';

export interface Perk {
  category: string;
  perkName: string;
  description: string;
}

@Component({
  selector: 'app-perks',
  templateUrl: './perks.component.html',
  styleUrls: ['./perks.component.scss']
})
export class PerksComponent implements OnChanges {
  @Input() public statsMap: StatsMap;

  public perksArray: Perk[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['statsMap']) {
      this.perksArray = this.getPerksArray(changes['statsMap'].currentValue);
    }
  }

  public getCardClassByStatName(statName: string): string {
    return statName ? 'stat-' + statName.toLowerCase().split(' ').join('-') : '';
  }

  public getPerksArray(statsMap: StatsMap): Perk[] {
    const perksArray: Perk[] = [];

    Object.keys(statsMap).forEach((statName) => {
      const statValue: number = statsMap[statName];

      switch (statName) {
        case 'Strength': {
          if (statValue === 10) {
            perksArray.push({
              category: statName,
              perkName: 'Strong and scary',
              description: 'Provides +3 point bonus to charisma checks'
            });
          }
          break;
        }
        case 'Intelligence': {
          if (statValue >= 3) {
            perksArray.push({
              category: statName,
              perkName: 'Potions master',
              description: 'You can brew potions'
            });
          }
          if (statValue === 10) {
            perksArray.push({
              category: statName,
              perkName: 'Heisenberg',
              description: 'You can brew much complex potions including big mana potion'
            });
          }
          break;
        }
      }
    });

    return perksArray;
  }
}
