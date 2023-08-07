import {Component} from '@angular/core';
import {StatItem, StatsMap} from '../../../general-stats/models/models';

@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.scss']
})
export class ImportPageComponent {
  public characterJSON = '';

  public characterData: any;
  public statsMap: StatsMap;

  public import(characterJSON: string) {
    this.characterData = JSON.parse(characterJSON);
    this.statsMap = this.characterData.stats.reduce((statsMap: StatsMap, statItem: StatItem) => {
      statsMap[statItem.name] = statItem.value;

      return statsMap;
    }, {});

    const currentAdminDataJSON = localStorage.getItem('adminData');

    if (currentAdminDataJSON) {
      const currentAdminData = JSON.parse(currentAdminDataJSON);

      currentAdminData[this.characterData.characterName] = this.characterData;
      localStorage.setItem('adminData', JSON.stringify(currentAdminData));
    } else {
      localStorage.setItem('adminData', JSON.stringify({
        [this.characterData.characterName]: this.characterData,
      }));
    }
  }
}
