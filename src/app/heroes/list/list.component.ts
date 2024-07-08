
import { Component } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  public dato: string = 'Que rollooo';
  public personas: string[] = ['Mike', 'Chuy', 'Kevin', 'Mario', 'Carlos']
  public deletedPerson?: string;
  
  
dropLast(): void {
    this.deletedPerson = this.personas.pop();
    console.log(this.deletedPerson);
  }

reset(): void {
  this.personas = ['Mike', 'Chuy', 'Kevin', 'Mario', 'Carlos'];
  this.deletedPerson = undefined;
}
}