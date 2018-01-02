import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../service/shared.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public _sharedService:SharedService  ) { }

  ngOnInit() {
  }

}
