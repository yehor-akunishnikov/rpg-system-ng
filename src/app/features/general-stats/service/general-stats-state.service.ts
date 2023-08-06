import {Injectable} from '@angular/core';

import {StatItem} from '../models/models';

export interface State {
  stats: StatItem[];
  points: number;
  characterName: string;
  isCharacterCreated: boolean;
}

@Injectable()
export class GeneralStatsStateService {
  private state: State = {
    stats: [
      {name: 'Strength', value: 0},
      {name: 'Charisma', value: 0},
      {name: 'Endurance', value: 0},
      {name: 'Intelligence', value: 0},
      {name: 'Agility', value: 0},
      {name: 'Perception', value: 0},
      {name: 'Luck', value: 0},
    ],
    points: 28,
    characterName: '',
    isCharacterCreated: false,
  };

  public initialize(): void {
    const characterDataFromLocalStorage = localStorage.getItem('characterData');

    if (characterDataFromLocalStorage) {
      const {stats, characterName} = JSON.parse(characterDataFromLocalStorage);

      this.state.stats = stats;
      this.state.characterName = characterName;
      this.state.isCharacterCreated = true;
    }
  }

  public reset(): void {
    this.state = {
      stats: [
        {name: 'Strength', value: 0},
        {name: 'Charisma', value: 0},
        {name: 'Endurance', value: 0},
        {name: 'Intelligence', value: 0},
        {name: 'Agility', value: 0},
        {name: 'Perception', value: 0},
        {name: 'Luck', value: 0},
      ],
      points: 28,
      characterName: '',
      isCharacterCreated: false,
    };
  }

  public getState(): State {
    return this.state;
  }

  public incrementStat(statName: string): void {
    const stat = this.state.stats.find(stat => stat.name === statName);

    if (stat) {
      stat.value++;
      this.state.points--;
    }
  }

  public decrementStat(statName: string): void {
    const stat = this.state.stats.find(stat => stat.name === statName);

    if (stat) {
      stat.value--;
      this.state.points++;
    }
  }

  public onCharacterCreated(characterName: string): void {
    this.state.characterName = characterName;
    this.state.isCharacterCreated = true;
  }
}
