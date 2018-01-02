import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';



@Component({
    selector: 'step1',
    templateUrl: './step1.component.html',
    styleUrls: ['./step1.component.css']
})
export class Step1Component {
    name:string;
    lastName:string;
    @Output() onNextView = new EventEmitter<any>();

    NextView(){
        var elem = {name: this.name, lastName: this.lastName, nextView :'step2'};
        this.onNextView.emit(elem);
        //console.log(elem);
    }
   
}
