import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: '../../pages/dbz-page.component.css',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public newCharacter: Character = {
    name: '',
    ki: 0,
  }

  emitCharacter(){
    if( this.newCharacter.name.length == 0 ) return;

    this.onNewCharacter.emit(this.newCharacter);
    console.log(this.newCharacter)
  }


 }
