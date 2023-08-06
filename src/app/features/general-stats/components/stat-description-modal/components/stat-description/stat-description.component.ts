import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stat-description',
  templateUrl: './stat-description.component.html',
  styleUrls: ['./stat-description.component.scss']
})
export class StatDescriptionComponent {
  @Input() public statName: string = '';
}
