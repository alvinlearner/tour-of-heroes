import { Component } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  // standalone: true,
  // imports: [
  //   NgFor,
  // ]

})





export class HeroesComponent {

  selectedHero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
