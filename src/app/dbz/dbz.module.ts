import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainComponent } from './pages/dbz-page.component';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';
import { ListCharactersComponent } from './components/listCharacters/listCharacters.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListCharactersComponent,
    DbzMainComponent,
    AddCharacterComponent
  ],
  exports:[
    DbzMainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

})
export class DbzModule { }
