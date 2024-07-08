import { Component } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent{ 
  public dato:string = 'Que rollooo';
  
  public heroName:string = 'Batman';
  public heroAge:number = 32;
  //Funciona como una property
  get capitalizedName():string{
    return this.heroName.toUpperCase();
  }
  
  getDescription():string{
    return `${this.heroName} - ${this.heroAge}`
  }
  
  changeName():void{
    this.heroName = 'Spidermaan';
  }
  
  changeAge(){
    this.heroAge = 21;
  }
  
  resetAll(){
    this.heroAge = 32;
    this.heroName = 'Batman';
  }
  
  
}
