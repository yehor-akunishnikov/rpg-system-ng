import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {StatsMap} from '../../general-stats/models/models';

@Component({
  selector: 'app-detailed-stats',
  templateUrl: './detailed-stats.component.html',
  styleUrls: ['./detailed-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedStatsComponent {
  @Input() public statsMap: StatsMap;
}
