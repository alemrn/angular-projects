import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

 public characters: Character[] = [
   {
      id: uuid(),
      name: 'Krilllin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public onNewCharacter(character : Character) {
    this.characters.push({id: uuid(), ...character});

  }

  public onDeleteCharacter(uuid: string) {
    this.characters = this.characters.filter(character => character.id !== uuid);
  }

}
