import {Injectable} from '@angular/core';

import {StatItem, StatsMap} from '../models/models';

export interface State {
  stats: StatItem[];
  statsMap: StatsMap;
  points: number;
  characterName: string;
  isCharacterCreated: boolean;
  spells: string[];
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
    statsMap: {
      Strength: 0,
      Charisma: 0,
      Endurance: 0,
      Intelligence: 0,
      Agility: 0,
      Perception: 0,
      Luck: 0,
    },
    points: 25,
    characterName: '',
    isCharacterCreated: false,
    spells: [],
  };

  public initialize(): void {
    const characterDataFromLocalStorage = localStorage.getItem('characterData');

    if (characterDataFromLocalStorage) {
      const {stats, characterName, spells} = JSON.parse(characterDataFromLocalStorage);

      this.state = {
        ...this.state,
        stats: stats,
        characterName,
        statsMap: stats.reduce((statsMap: StatsMap, statItem: StatItem) => {
          statsMap[statItem.name] = statItem.value;

          return statsMap;
        }, {}),
        isCharacterCreated: true,
        spells,
      };
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
      statsMap: {
        Strength: 0,
        Charisma: 0,
        Endurance: 0,
        Intelligence: 0,
        Agility: 0,
        Perception: 0,
        Luck: 0,
      },
      points: 25,
      characterName: '',
      isCharacterCreated: false,
      spells: [],
    };
  }

  public getState(): State {
    return this.state;
  }

  public incrementStat(statName: string): void {
    this.state = {
      ...this.state,
      statsMap: {
        ...this.state.statsMap,
        [statName]: this.state.statsMap[statName] + 1,
      },
      points: this.state.points - 1,
      stats: this.state.stats.map(stat => {
        return stat.name === statName ? {...stat, value: stat.value + 1} : stat;
      }),
    };
  }

  public decrementStat(statName: string): void {
    this.state = {
      ...this.state,
      statsMap: {
        ...this.state.statsMap,
        [statName]: this.state.statsMap[statName] - 1,
      },
      points: this.state.points + 1,
      stats: this.state.stats.map(stat => {
        return stat.name === statName ? {...stat, value: stat.value - 1} : stat;
      }),
    };
  }

  public onCharacterCreated(characterName: string): void {
    this.state = {
      ...this.state,
      characterName,
      isCharacterCreated: true
    };
  }

  public addSpell(spellName: string) {
    this.state.spells = [...this.state.spells, spellName];
  }

  public removeSpell(spellName: string) {
    this.state.spells = this.state.spells.filter(spell => spell !== spellName);
  }
}
