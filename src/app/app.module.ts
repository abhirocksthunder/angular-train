import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Day1Component } from './day1/day1.component';
import { TrainingComponent } from './training/training.component';
import { DealershipAddComponent } from './dealership-add/dealership-add.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Day1Component, TrainingComponent, DealershipAddComponent, TitleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
