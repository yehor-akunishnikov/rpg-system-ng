import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import {DiceRollerModalComponent} from '../components/dice-roller-modal/dice-roller-modal.component';
import {StatsMap} from '../../general-stats/models/models';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerModalService {
  private dialogRef: MatDialogRef<any> | undefined;

  constructor(
    private dialog: MatDialog
  ) {
  }

  public openDialog(statsMap: StatsMap): void {
    this.dialogRef = this.dialog.open(DiceRollerModalComponent, {
      width: '100vw',
      maxWidth: 'unset',
      minHeight: '100vh',
      data: {
        statsMap
      }
    });
  }

  public closeDialog(): void {
    this.dialogRef?.close();
  }
}
