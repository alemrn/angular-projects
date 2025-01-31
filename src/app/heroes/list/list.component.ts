import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She hulk', 'Thor', 'American Captain'];
  public deletedHeroe: string | undefined;


  removeLastHero(): void{
    this.deletedHeroe = this.heroNames.pop();
  }


}
