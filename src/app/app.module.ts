import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularLikeButtonComponent } from './Components/angular-like-button/angular-like-button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AngularLikeButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
