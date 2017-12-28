import { Component, OnInit } from '@angular/core';
import { SharedService } from './../service/shared.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  constructor(private _sharedService:SharedService) { }

  ngOnInit() {
  }

  addCounter(){
    this._sharedService.cont ++;
  }

}
