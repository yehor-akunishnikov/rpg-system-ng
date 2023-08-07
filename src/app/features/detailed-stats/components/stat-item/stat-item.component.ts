import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {StatsMap} from '../../../general-stats/models/models';

export enum STAT_NAME {
  HP = 'HP',
  MALE_DAMAGE = 'MELEE DAMAGE',
  UNARMED = 'UNARMED'
}

@Component({
  selector: 'app-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatItemComponent {
  @Input() public statName: STAT_NAME = STAT_NAME.HP;
  @Input() public statsMap: StatsMap = {
    Strength: 0,
    Charisma: 0,
    Endurance: 0,
    Intelligence: 0,
    Agility: 0,
    Perception: 0,
    Luck: 0,
  };

  public getCardClassByStatName(statName: STAT_NAME): string {
    return statName ? statName.toLowerCase().split(' ').join('-') : '';
  }

  public countStatValue(statName: STAT_NAME, statsMap: StatsMap): number {
    switch (statName) {
      case STAT_NAME.HP: {
        const BASE_HP = 10;
        const strengthBonus =  statsMap.Strength ? Math.floor(statsMap.Strength / 3) : 0;

        return BASE_HP + strengthBonus * 5;
      }
      case STAT_NAME.MALE_DAMAGE: return statsMap.Strength - 5;
      case STAT_NAME.UNARMED: {
        const BASE_UNARMED = 0;
        const STRENGTH_ORIGIN_BONUS = 4;
        const strengthBonus = statsMap.Strength - 5 >= 0 ? (statsMap.Strength - 5) + 1 : 0;

        return statsMap.Strength === 10 ?
          BASE_UNARMED + STRENGTH_ORIGIN_BONUS + strengthBonus :
          BASE_UNARMED + strengthBonus;
      }
      default: return 0;
    }
  }
}
