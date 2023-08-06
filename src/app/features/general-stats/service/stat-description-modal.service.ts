import {Injectable} from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {StatDescriptionModalComponent} from '../components/stat-description-modal/components/stat-description-modal.component';

@Injectable()
export class StatDescriptionModalService {
  private dialogRef: MatDialogRef<any> | undefined;

  constructor(
    private dialog: MatDialog
  ) {
  }

  public openDialog(statName: string): void {
    this.dialogRef = this.dialog.open(StatDescriptionModalComponent, {
      width: '100vw',
      maxWidth: 'unset',
      minHeight: '100vh',
      data: {
        statName
      },
    });
  }

  public closeDialog(): void {
    this.dialogRef?.close();
  }
}
