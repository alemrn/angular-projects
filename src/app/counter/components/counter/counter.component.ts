import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)="increaseBy(1)" class="btn btn-primary mx-2">+1</button>
  <button (click)="reset()" class="btn btn-primary mx-2">reset</button>
  <button (click)="increaseBy(-1)" class="btn btn-primary mx-2">-1</button>`,
})
export class CounterComponent
{
  public counter: number = 10;
  constructor() { }


  public increaseBy(value: number) : void{
    this.counter += value;
  }

  public reset() : void{
      this.counter = 10;
  }

}
