import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {StatItem} from '../../general-stats/models/models';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss'],
})
export class AdminBoardComponent implements OnInit {
  public adminData: {
    [key: string]: {
      stats: StatItem[]
    };
  } | undefined;

  public ngOnInit(): void {
    const adminDataJSON = localStorage.getItem('adminData');

    if (adminDataJSON) {
      this.adminData = JSON.parse(adminDataJSON);
    }
  }

  public clear() {
    localStorage.removeItem('adminData');
    this.adminData = undefined;
  }
}
