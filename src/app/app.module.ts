import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AnimationComponent } from './animation/animation.component';
import { CounterComponent } from './counter/counter.component';
import { SharedService } from './service/shared.service';
import { HeroService } from './service/hero.service';
import { HeroListBasicComponent } from './animation/hero-list-basic/hero-list-basic.component';
import {MultiFormComponent} from './multiform/multiForm.component';
import {Step1Component} from './multiform/step1/step1.component';
import {Step2Component} from './multiform/step2/step2.component';
import {Step3Component} from './multiform/step3/step3.component';
import { AccordionDivAnimationComponent } from './accordion-div-animation/accordion-div-animation.component';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeroDetailComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    AnimationComponent,
    CounterComponent,
    HeroListBasicComponent,
    MultiFormComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    AccordionDivAnimationComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'hero', component: HeroDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'animation', component: AnimationComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'multiform', component: MultiFormComponent },
      { path: 'accordiondiv', component: AccordionDivAnimationComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: '**', redirectTo: 'home' }
  ])
  ],
  providers: [SharedService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
