import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './components/home/home';
import {Recipe} from './components/recipe/recipe';
import {Instructions} from './components/instructions/instructions';
import {FindByIngredients} from './components/find-by-ingredients/find-by-ingredients';
import {GenerateMealPlan} from './components/generate-meal-plan/generate-meal-plan';

const routes: Routes = [
  {path: 'home', component: Home},
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: '**', redirectTo: 'home' },
  {path: 'recipe', component: Recipe},
  {path: 'instructions/:id', component: Instructions },
  {path: 'findByIngredients', component: FindByIngredients },
  {path: 'generateMealPlan', component: GenerateMealPlan },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
