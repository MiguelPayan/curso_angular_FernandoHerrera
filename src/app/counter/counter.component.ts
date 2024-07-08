import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent{
  public count:number = 0;
  
increaseBy(value: number):void {
    this.count += value;
}

reset():void {
  this.count = 0;
}
}