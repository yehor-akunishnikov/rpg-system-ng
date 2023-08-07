import {Component, OnInit} from '@angular/core';

import {StatItem, StatsMap} from '../../general-stats/models/models';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss'],
})
export class AdminBoardComponent implements OnInit {
  public adminData: {
    [key: string]: {
      stats: StatItem[],
      statsMap: StatsMap,
      spells: string[],
    };
  } | undefined;

  public ngOnInit(): void {
    const adminDataJSON = localStorage.getItem('adminData');

    if (adminDataJSON) {
      this.adminData = JSON.parse(adminDataJSON);
      Object.keys(this.adminData).forEach(characterName => {
        const characterStats = this.adminData[characterName].stats;
        const statsMap: StatsMap = {} as StatsMap;

        characterStats.forEach(stat => {
          statsMap[stat.name] = stat.value;
        });

        this.adminData[characterName].statsMap = statsMap;
      });
    }
  }

  public clear() {
    localStorage.removeItem('adminData');
    this.adminData = undefined;
  }
}
