import { Pipe, PipeTransform } from '@angular/core';

// Supprimer les parenthèses du nom de l'astéroïde

@Pipe({
  name: 'nameFormat'
})
export class NameFormat implements PipeTransform {

  transform(name: string): string {
    return name.replace(/[{()}]/g, '');
  }

}