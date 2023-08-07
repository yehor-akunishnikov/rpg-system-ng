import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'directCheck'
})
export class DirectCheckPipe implements PipeTransform {

  transform(statValue: number): string {
    return statValue - 5 >= 0 ? '+' + String(statValue - 5) : String(statValue - 5);
  }

}
