import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    name: 'Goku',
    ki: 30
  },
  {
    name: 'Vegeta',
    ki: 32
  },
  {
    name: 'Krilin',
    ki: 30
  }
];

  onNewCharacter(character:Character):void{
    this.characters.push(character);
  }

  onDeletedCharacter(index:number){
    console.log(index)
    this.characters.splice(index,1)
  }

}
