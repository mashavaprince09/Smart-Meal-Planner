import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Recipe } from './components/recipe/recipe';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import { Instructions } from './components/instructions/instructions';
import { FindByIngredients } from './components/find-by-ingredients/find-by-ingredients';
import { GenerateMealPlan } from './components/generate-meal-plan/generate-meal-plan';

@NgModule({
  declarations: [
    App,
    Home,
    Recipe,
    Instructions,
    FindByIngredients,
    GenerateMealPlan
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
