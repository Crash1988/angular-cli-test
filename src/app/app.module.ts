import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AlertModule } from 'ngx-bootstrap'; 


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeroDetailComponent
  ],
  imports: [AlertModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
