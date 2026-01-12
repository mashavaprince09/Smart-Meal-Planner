import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Recipe } from './components/recipe/recipe';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import { Instructions } from './components/instructions/instructions';

@NgModule({
  declarations: [
    App,
    Home,
    Recipe,
    Instructions
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
