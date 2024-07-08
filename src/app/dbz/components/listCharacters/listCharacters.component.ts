import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-list-characters',
  templateUrl: './listCharacters.component.html',
  styleUrl: '../../pages/dbz-page.component.css',
})
export class ListCharactersComponent {

  @Input()
  public newCharacter:Character[] =
    [
      {
        name: '',
        ki: 0
      }
    ];


  @Output()
  public onDeletedCharacter: EventEmitter<number> = new EventEmitter();

  emitToDelete(index:number){
    this.onDeletedCharacter.emit(index);
  }

 }
