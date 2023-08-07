import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

export interface SpellMetadata {
  name: string,
  description: string,
  cost: number
}

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellsComponent {
  @Input() public Intelligence: number;
  @Input() public spells: string[] = [];
  @Output() public onSpellSelected = new EventEmitter<string>();

  public TIER_ONE_SPELLS: SpellMetadata[] = [
    {
      name: 'Roots binding',
      description: 'Enemy looses an ability to move for one round',
      cost: 3
    },
    {
      name: 'Healing touch',
      description: 'Restores health by 2 HP',
      cost: 4
    },
    {
      name: 'Fireball',
      description: 'Deals 2 damage at once and 1 damage at the start of the next 2 rounds',
      cost: 5
    },
    {
      name: 'Magic shield',
      description: 'blocks 50% of damage for 2 rounds',
      cost: 6
    },
    {
      name: 'Third eye',
      description: 'Grants 2 point buff for the next perception check',
      cost: 5
    },
  ];

  public TIER_TWO_SPELLS: SpellMetadata[] = [
    {
      name: 'Killing curse',
      description: 'Enemy dies after 3 rounds',
      cost: 10
    },
    {
      name: 'Fiendfyre',
      description: 'Summons living fire, that strikes all enemies at the start of the each round. Deals 3 damage to each.',
      cost: 8
    },
    {
      name: 'Mana vampirism',
      description: 'You can finish enemy if his HP is 20% or lower and get MP amount depending on additive intelligence check.',
      cost: 5
    },
    {
      name: 'Bombarda',
      description: 'Explosive spell, which deals 10HP damage to enemies standing nearby. Could be used to destroy obstacles.',
      cost: 15
    },
    {
      name: 'Mind trick',
      description: 'Causes enemy to fight against his group for 3 rounds',
      cost: 10
    },
  ];

  public getSpellClass(spells: string[], spellName: string): string {
    return spells?.some(spell => spell === spellName) ? 'selected' : '';
  }

  public getAvailableTier(Intelligence: number): number {
    if (Intelligence >= 5 && Intelligence < 10) {
      return 1;
    }

    if (Intelligence === 10) {
      return 2;
    }

    return 0;
  }

  public selectSpell(spellName: string): void {
    this.onSpellSelected.emit(spellName);
  }
}
