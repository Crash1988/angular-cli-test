import { Component, OnInit, Input } from '@angular/core';
import { Hero, HeroService } from './../../service/hero.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-hero-list-basic',
  templateUrl: './hero-list-basic.component.html',
  styleUrls: ['./hero-list-basic.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.3)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-in'))
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(500%) rotate(360deg) '}),
        animate(300),
        style({transform: 'translateX(-50%) rotate(-60deg) '}),
        animate(200),
        style({transform: 'translateX(40%) rotate(50deg) '}),
        animate(180),
        style({transform: 'translateX(-30%) rotate(-40deg) '}),
        animate(160),
        style({transform: 'translateX(20%) rotate(-30deg) '}),
        animate(140),
        style({transform: 'translateX(10%) rotate(20deg) '}),
        animate(120),
        style({transform: 'translateX(0%) rotate(-10deg) '}),
        animate(100),
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(-100%) rotate(90deg) '}))
      ])
    ])
  ]
})
export class HeroListBasicComponent implements OnInit {

  @Input() heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

}
