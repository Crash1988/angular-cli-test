import { Component } from '@angular/core';
import {Step1Component} from './step1/step1.component';
import { forEach } from '@angular/router/src/utils/collection';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
    selector: 'multiForm',
    templateUrl: './multiForm.component.html',
    styleUrls: ['./multiForm.component.css'],
    animations: [
        trigger('flyInOut', [
          state('in', style({
              transform: 'translatey(0) ',
              color:'black',
            })),
          transition('void => *', [
            style({transform: 'translatey(94%) '}),
            animate(400)
          ]),
          transition('* => void', [
            animate(400, 
                style({transform: 'translatey(-94%) '}))
          ])
        ]),
        trigger('titleTextTrigger', [
            state('in', style({ opacity: '1' })),
            transition('void => *', [style({ opacity: '0' }),
                animate('100ms 300ms')
            ]),
            transition('* => void', [
                animate('100ms', style({ opacity: '1' }))
            ])
        ])
    ]
})
export class MultiFormComponent {
    public formViews= {step1:true,step2:false,step3:false};
    
    constructor(){

    }

    NextView()
    {
        if(this.formViews.step1){
            this.formViews.step1 = false;
            this.formViews.step2 = true;
            return;
        }
        
        if(this.formViews.step2){
            this.formViews.step2 = false;
            this.formViews.step3 = true;
            return;
        }
        if(this.formViews.step3){
            this.formViews.step3 = false;
            this.formViews.step1 = true;
            return;
        }
    }
    GoToView(view:string)
    {
        if(view=='step1'){
            this.formViews.step1 = true;
            this.formViews.step2 = false;
            this.formViews.step3 = false;
            return;
        }
        if(view=='step2'){
            this.formViews.step1 = false;
            this.formViews.step2 = true;
            this.formViews.step3 = false;
            return;
        }
        if(view=='step3'){
            this.formViews.step1 = false;
            this.formViews.step2 = false;
            this.formViews.step3 = true;
            return;
        }

    }
    onNextView(elem: any){
        this.GoToView(elem.nextView)
        //console.log(elem);
    }
}
