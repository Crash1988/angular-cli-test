import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { states } from '../data-model';
import{Observable} from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  states = states;
  password = "";
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }
  ngOnInit() {
  }

  createForm() {
    this.heroForm = this.fb.group({ // <-- the parent FormGroup
      name: ['', Validators.compose([
        Validators.required, 
        //Validators.maxLength(10),
        Validators.minLength(4)
      ])],
      email: ['', Validators.compose([
        Validators.required, 
        Validators.email,
      ])],

      email2: ['', Validators.compose([
        Validators.required, 
        Validators.email,]),
        this.validPassword.bind(this)
       ],
      address: this.fb.group({ // <-- the child FormGroup
        street: '',
        city: '',
        state: '',
        zip: ['', Validators.compose([
          Validators.required,           
          Validators.maxLength(5),
          Validators.minLength(5)
        ])],
      }),
      power: '',
      sidekick: ''
    });
  }

  clicked(){    
    //console.log(this.heroForm.controls.address);
    this.heroForm.reset();

  }
  validPassword(control: AbstractControl) {            
    return Observable
         .of(this.password === control.value)
         .map(result => !!result ? null : { invalid: true });        
  }
  

}
