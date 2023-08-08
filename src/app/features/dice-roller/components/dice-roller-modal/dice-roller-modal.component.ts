import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {DiceRollerModalService} from '../../services/dice-roller-modal.service';
import {StatsMap} from '../../../general-stats/models/models';

@Component({
  selector: 'app-dice-roller-modal',
  templateUrl: './dice-roller-modal.component.html',
  styleUrls: ['./dice-roller-modal.component.scss']
})
export class DiceRollerModalComponent {
  public selectedStat: string = 'None';
  public addBonusOrPenalty: number = 0;
  public resultD20: { cleanRes: number, dirtyRes: number } = null;

  public selectedDamageDice: number = 8;
  public damageDicesAmount: number = 1;
  public damageDiceStat: string = 'Strength';
  public damageAddBonusOrPenalty: number = 0;
  public resultDamage: { cleanRes: number, dirtyRes: number } = null;

  public selectedAnyDice: number = 8;
  public anyDicesAmount: number = 1;
  public resultAny: { cleanRes: number, dirtyRes: number } = null;

  public DICES: {title: string, value: number}[] = [
    {value: 2, title: 'D2'},
    {value: 3, title: 'D3'},
    {value: 4, title: 'D4'},
    {value: 6, title: 'D6'},
    {value: 8, title: 'D8'},
    {value: 10, title: 'D10'},
    {value: 12, title: 'D12'},
    {value: 20, title: 'D20'},
    {value: 100, title: 'D100'},
  ];

  public DAMAGE_DICES : {title: string, value: number}[] = [
    {value: 2, title: 'D2'},
    {value: 3, title: 'D3'},
    {value: 4, title: 'D4'},
    {value: 6, title: 'D6'},
    {value: 8, title: 'D8'},
    {value: 10, title: 'D10'},
    {value: 12, title: 'D12'},
  ];

  constructor(
    public diceRollerModalService: DiceRollerModalService,
    @Inject(MAT_DIALOG_DATA) public data: {statsMap: StatsMap},
  ) {
  }

  public rollD20Dice(
    selectedStat: string,
    addBonusOrPenalty: number,
    statsMap: StatsMap
  ): void {
    const cleanRes = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    let dirtyRes = cleanRes;

    if (selectedStat !== 'None') {
      dirtyRes += (statsMap[selectedStat] ?? 0) - 5;
    }

    if (addBonusOrPenalty) {
      dirtyRes += addBonusOrPenalty ?? 0;
    }

    this.resultD20 = { cleanRes, dirtyRes };
  }

  public clearD20() {
    this.resultD20 = null;
    this.selectedStat = 'None';
    this.addBonusOrPenalty = null;
  }

  public clearD20Result() {
    this.resultD20 = null;
  }

  public rollDamageDice(
    selectedDice: number,
    dicesAmount: number,
    selectedStat: string,
    addBonusOrPenalty: number,
    statsMap: StatsMap
  ): void {
    let cleanRes = 0;

    for (let i = 0; i < dicesAmount; i++) {
      cleanRes += Math.floor(Math.random() * (selectedDice - 1 + 1) + 1);
    }

    let dirtyRes = cleanRes;

    if (selectedStat !== 'None') {
      dirtyRes += (statsMap[selectedStat] ?? 0) - 5;
    }

    if (addBonusOrPenalty) {
      dirtyRes += addBonusOrPenalty ?? 0;
    }

    this.resultDamage = { cleanRes, dirtyRes };
  }

  public clearDamage() {
    this.selectedDamageDice = 8;
    this.damageDicesAmount = 1;
    this.damageDiceStat = 'Strength';
    this.damageAddBonusOrPenalty = 0;
    this.resultDamage = null;
  }

  public clearDamageResult() {
    this.resultDamage = null;
  }

  public rollAnyDice(
    selectedDice: number,
    dicesAmount: number
  ): void {
    let cleanRes = 0;

    for (let i = 0; i < dicesAmount; i++) {
      cleanRes += Math.floor(Math.random() * (selectedDice - 1 + 1) + 1);
    }

    let dirtyRes = cleanRes;

    this.resultAny = { cleanRes, dirtyRes };
  }

  public clearAny() {
    this.selectedAnyDice = 8;
    this.anyDicesAmount = 1;
    this.resultAny = null;
  }

  public clearAnyDiceResult() {
    this.resultAny = null;
  }
}
