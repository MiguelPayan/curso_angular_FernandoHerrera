import { Component } from '@angular/core';
import { Character } from '../interfaces/character';
import { DbzService } from '../services/dbzService.service';

@Component({
  selector: 'dbz-main',
  templateUrl: './dbz-page.component.html',
  styleUrl: './dbz-page.component.css'
})

export class DbzMainComponent{
  constructor(public DbzService : DbzService) {}

}
