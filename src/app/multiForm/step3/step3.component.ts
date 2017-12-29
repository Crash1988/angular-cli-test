import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
    selector: 'step3',
    templateUrl: './step3.component.html',
    styleUrls: ['./step3.component.css', '../multiform.component.css']
})
export class Step3Component {
    
    @Output() onNextView = new EventEmitter<any>();
    NextView(){
        var elem = {nextView :'step1'};
        this.onNextView.emit(elem);
        //console.log(elem);
    }
}
