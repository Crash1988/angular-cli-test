import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-accordion-div-animation',
  templateUrl: './accordion-div-animation.component.html',
  styleUrls: ['./accordion-div-animation.component.css'],
  animations:[
    trigger('expand', [
      state('big', style({
        'height': '400px'
      })),
      state('normal', style({
        'height': '100px'
      })),
      state('small', style({
        'height': '50px'
      })),
      transition('* => *', [group([
        animate(300)
      ]
      )])
    ]),
  ]
})
export class AccordionDivAnimationComponent implements OnInit {

  expandState1 = 'normal';
  expandState2 = 'normal';
  expandState3 = 'normal';
  expandState4 = 'normal';
  expandState5 = 'normal';

  ngOnInit() {
    this.resetStates();
  }

  resetStates() {
    this.expandState1 = 'normal';
    this.expandState2 = 'normal';
    this.expandState3 = 'normal';
    this.expandState4 = 'normal';
    this.expandState5 = 'normal';
  }

  toggleShowDiv(divName: string) {
    if (divName === 'div1') {
      if (this.expandState1 === 'normal' || this.expandState1 === 'small') {
        this.setToBig([1]);
        this.setToSmall([2, 3, 4, 5]);
      } else if (this.expandState1 === 'big' || this.expandState1 === 'small') {
        this.resetStates();
      }
    } else if (divName === 'div2') {
      if (this.expandState2 === 'normal' || this.expandState2 === 'small') {
        this.setToBig([2]);
        this.setToSmall([1, 3, 4, 5]);
      } else if (this.expandState2 === 'big') {
        this.resetStates();
      }
    } else if (divName === 'div3') {
      if (this.expandState3 === 'normal' || this.expandState3 === 'small') {
        this.setToBig([3]);
        this.setToSmall([1, 2, 4, 5]);
      } else if (this.expandState3 === 'big') {
        this.resetStates();
      }
    } else if (divName === 'div4') {
      if (this.expandState4 === 'normal' || this.expandState4 === 'small') {
        this.setToBig([4]);
        this.setToSmall([1, 2, 3, 5]);
      } else if (this.expandState4 === 'big') {
        this.resetStates();
      }
    } else if (divName === 'div5') {
      if (this.expandState5 === 'normal' || this.expandState5 === 'small') {
        this.setToBig([5]);
        this.setToSmall([1, 2, 3, 4]);
      } else if (this.expandState5 === 'big') {
        this.resetStates();
      }
    }
  }

  setToSmall(choices: any) {
    for (let i = 0; i < choices.length; i++) {
      switch (choices[i]) {
        case 1:
          this.expandState1 = 'small';
          break;
        case 2:
          this.expandState2 = 'small';
          break;
        case 3:
          this.expandState3 = 'small';
          break;
        case 4:
          this.expandState4 = 'small';
          break;
        case 5:
          this.expandState5 = 'small';
          break;
        default:
          break;
      }
    }
  }

  setToBig(choices: any) {
    for (let i = 0; i < choices.length; i++) {
      switch (choices[i]) {
        case 1:
          this.expandState1 = 'big';
          break;
        case 2:
          this.expandState2 = 'big';
          break;
        case 3:
          this.expandState3 = 'big';
          break;
        case 4:
          this.expandState4 = 'big';
          break;
        case 5:
          this.expandState5 = 'big';
          break;
        default:
          break;
      }
    }
  }
}
