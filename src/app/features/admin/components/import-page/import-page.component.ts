import {Component} from '@angular/core';

@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.scss']
})
export class ImportPageComponent {
  public characterJSON = '';

  public characterData: any;

  public import(characterJSON: string) {
    this.characterData = JSON.parse(characterJSON);

    const currentAdminDataJSON = localStorage.getItem('adminData');

    if (currentAdminDataJSON) {
      const currentAdminData = JSON.parse(currentAdminDataJSON);

      currentAdminData[this.characterData.characterName] = this.characterData;
      localStorage.setItem('adminData', JSON.stringify(currentAdminData));
    } else {
      localStorage.setItem('adminData', JSON.stringify({
        [this.characterData.characterName]: this.characterData,
      }));
    }
  }
}
