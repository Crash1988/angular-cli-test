import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'step2',
    templateUrl: './step2.component.html',
    styleUrls: ['./step2.component.css']
})
export class Step2Component {
    email:string;
    companyName: string;
    @Output() onNextView = new EventEmitter<any>();

    NextView(){
        var elem = {email: this.email, companyName: this.companyName, nextView :'step3'};
        this.onNextView.emit(elem);
        //console.log(elem);
    }
}
