import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {StatsMap} from '../../../general-stats/models/models';

export enum STAT_NAME {
  HP = 'HP',
  MALE_DAMAGE = 'MELEE DAMAGE',
  UNARMED = 'UNARMED',
  MP = 'MP',
  RETRY_ATTEMPTS = 'RETRY ATTEMPTS',
  ARMOR_CLASS = 'ARMOR CLASS',
  DEATH_POINTS = 'DEATH POINTS',
  DODGE = 'DODGE',
  RANGE_DAMAGE = 'RANGE DAMAGE',
  STEALTH = 'STEALTH',
  GUNS = 'GUNS',
  ACTION_POINTS = 'ACTION POINTS'
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

  public getIconByStatName(statName: string): string {
    switch (statName) {
      case STAT_NAME.HP: return 'favorite';
      case STAT_NAME.UNARMED: return 'sports_kabaddi';
      case STAT_NAME.MALE_DAMAGE: return 'colorize';
      case STAT_NAME.MP: return 'flare';
      case STAT_NAME.RETRY_ATTEMPTS: return 'replay';
      case STAT_NAME.ARMOR_CLASS: return 'shield';
      case STAT_NAME.DEATH_POINTS: return 'health_and_safety';
      case STAT_NAME.DODGE: return 'sports_martial_arts';
      case STAT_NAME.RANGE_DAMAGE: return 'adjust';
      case STAT_NAME.STEALTH: return 'visibility';
      case STAT_NAME.GUNS: return 'gamepad';
      case STAT_NAME.ACTION_POINTS: return 'directions_run';
      default: return '';
    }
  }

  public countStatValue(statName: STAT_NAME, statsMap: StatsMap): number | string {
    switch (statName) {
      case STAT_NAME.HP: {
        const BASE_HP = 10;
        const strengthBonus = statsMap.Strength ? Math.floor(statsMap.Strength / 3) : 0;

        return BASE_HP + strengthBonus * 2;
      }
      case STAT_NAME.MALE_DAMAGE:
        return statsMap.Strength - 5;
      case STAT_NAME.UNARMED: {
        if (statsMap.Strength === 10) {
          return 'D4 2x';
        } else {
          return 'D4';
        }
      }
      case STAT_NAME.MP: {
        let mpAmount = 0;

        if (statsMap.Intelligence >= 5) {
          const BASIC_MP = 10;
          const intBonus = (statsMap.Intelligence - 5) * 5;
          const INT_ORIGIN_BONUS = 5;

          mpAmount = statsMap.Intelligence === 10 ?
            BASIC_MP + intBonus + INT_ORIGIN_BONUS :
            BASIC_MP + intBonus;
        }

        return mpAmount;
      }
      case STAT_NAME.RETRY_ATTEMPTS: {
        let retryAttempts = 0;

        if (statsMap.Luck >= 5) {
          retryAttempts = statsMap.Luck === 10 ? 2 : 1;
        }

        return `${retryAttempts}`;
      }
      case STAT_NAME.ARMOR_CLASS: {
        const BASE_ARMOR_CLASS = 10;
        const enduranceBonus = statsMap.Endurance ? Math.floor(statsMap.Endurance / 3) : 0;

        return BASE_ARMOR_CLASS + enduranceBonus * 2;
      }
      case STAT_NAME.DEATH_POINTS: {
        let deathPoints = 3;

        if (statsMap.Endurance) {
          deathPoints = deathPoints + Math.floor(statsMap.Endurance / 4);
        }

        return deathPoints;
      }
      case STAT_NAME.DODGE: {
        return statsMap.Agility >= 3 ? 'AVAILABLE (D20 + AG)' : 'NOT AVAILABLE';
      }
      case STAT_NAME.RANGE_DAMAGE:
        return statsMap.Agility - 5;
      case STAT_NAME.STEALTH: {
        return statsMap.Perception >= 5 ? 'AVAILABLE (D20 + PE)' : 'NOT AVAILABLE';
      }
      case STAT_NAME.GUNS: {
        return statsMap.Perception - 5;
      }
      case STAT_NAME.ACTION_POINTS: {
        return statsMap.Agility >= 5 ? '1 Main, 2 Additional, 1 Short' : '1 Main, 1 Additional, 1 Short';
      }
      default:
        return 0;
    }
  }
}
