import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {GeneralStatsStateService} from '../../service/general-stats-state.service';
import {StatItem} from '../../models/models';
import {StatDescriptionModalService} from '../../service/stat-description-modal.service';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsTableComponent {
  @Input() public isCharacterCreated = false;
  @Input() public stats: StatItem[] = [];
  @Input() public points: number = 28;

  public displayedColumns: string[] = ['name', 'value'];

  public constructor(
    public generalStatsStateService: GeneralStatsStateService,
    public statDescriptionModalService: StatDescriptionModalService,
  ) {
  }

  public isIncrementDisabled(
    stats: StatItem[],
    statValue: number,
    points: number
  ): boolean {
    const isSelectedOrigin = stats.some(stat => stat.value === 10);

    if (statValue === 10) {
      return true;
    }

    if (points === 0) {
      return true;
    }

    return isSelectedOrigin && statValue === 9;
  }

  public isDecrementDisabled(statValue: number): boolean {
    return statValue === 0;
  }

  public getStatNameClass(statName: string): string {
    switch (statName) {
      case 'Strength': return 'stat-strength';
      case 'Charisma': return 'stat-charisma';
      case 'Endurance': return 'stat-endurance';
      case 'Intelligence': return 'stat-intelligence';
      case 'Agility': return 'stat-agility';
      case 'Perception': return 'stat-perception';
      case 'Luck': return 'stat-luck';
      default: return '';
    }
  }
}
