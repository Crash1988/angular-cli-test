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
      { path: 'navbar', component: NavbarComponent },
      { path: '**', redirectTo: 'home' }
  ])
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
