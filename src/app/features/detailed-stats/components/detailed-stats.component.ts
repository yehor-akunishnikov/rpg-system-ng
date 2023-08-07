import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {StatsMap} from '../../general-stats/models/models';

@Component({
  selector: 'app-detailed-stats',
  templateUrl: './detailed-stats.component.html',
  styleUrls: ['./detailed-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedStatsComponent {
  @Input() public statsMap: StatsMap;
  @Input() public spells: string[] = [];
  @Output() public onSpellSelected = new EventEmitter<string>();

  public selectSpell(spellName: string): void {
    this.onSpellSelected.emit(spellName);
  }
}
