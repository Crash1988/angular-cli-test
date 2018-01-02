import { Component, OnInit } from '@angular/core';
import {HeroListBasicComponent} from './hero-list-basic/hero-list-basic.component'
import {Hero, HeroService} from '../service/hero.service'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
 
  heroes: Hero[];
  constructor(public heroService: HeroService) {
    this.heroes = heroService.heroes;   
  }
  ngOnInit() {
        
  }

}
