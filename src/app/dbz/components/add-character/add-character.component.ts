import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  @Output()
  public myCharacterEvent : EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: ''
  };

  public emitCharacter() {
    this.myCharacterEvent.emit({...this.character});
    this.character = { name :''};
  }

}
