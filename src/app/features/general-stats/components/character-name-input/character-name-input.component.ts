import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-character-name-input',
  templateUrl: './character-name-input.component.html',
  styleUrls: ['./character-name-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterNameInputComponent implements OnChanges {
  @Output() public onCharacterNameChange = new EventEmitter<string>();
  @Input() public isDisabled = false;
  @Input() public defaultName = '';

  public characterName = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['defaultName']) {
      this.characterName = changes['defaultName'].currentValue;
    }
  }

  public onCharacterNameInputBlur(): void {
    this.onCharacterNameChange.emit(this.characterName);
  }
}
