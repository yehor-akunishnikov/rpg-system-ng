import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

import {GeneralStatsStateService, State} from '../../general-stats/service/general-stats-state.service';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.scss'],
  providers: [GeneralStatsStateService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBoardComponent implements OnInit {
  public characterName = this.generalStatsStateService.getState().characterName;

  constructor(
    public generalStatsStateService: GeneralStatsStateService,
    private clipboard: Clipboard,
  ) {
  }

  public ngOnInit(): void {
    this.generalStatsStateService.initialize();
  }

  public setCharacterName(characterName: string): void {
    this.characterName = characterName;
  }

  public isCreateButtonDisabled(points: number, characterName: string): boolean {
    return points !== 0 || !characterName;
  }

  public createCharacter(state: State, characterName: string): void {
    this.generalStatsStateService.onCharacterCreated(characterName);
    localStorage.setItem('characterData', JSON.stringify({
      stats: state.stats,
      characterName,
    }));
  }

  public exportCharacterData(): void {
    const characterData = localStorage.getItem('characterData');

    if (characterData) {
      this.clipboard.copy(characterData);
    }
  }

  public resetCharacter(): void {
    const isResetConfirmed = confirm('Are you sure? It will delete all your stats and force you to create a new character.');

    if (isResetConfirmed) {
      localStorage.removeItem('characterData');
      this.generalStatsStateService.reset();
      this.characterName = '';
    }
  }
}
