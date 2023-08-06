import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {StatDescriptionModalService} from '../../../service/stat-description-modal.service';

@Component({
  selector: 'app-stat-description-modal',
  templateUrl: './stat-description-modal.component.html',
  styleUrls: ['./stat-description-modal.component.scss']
})
export class StatDescriptionModalComponent {
  constructor(
    public statDescriptionModalService: StatDescriptionModalService,
    @Inject(MAT_DIALOG_DATA) public data: {statName: string},
  ) {
  }
}
