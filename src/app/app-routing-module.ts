import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './components/home/home';
import {Recipe} from './components/recipe/recipe';
import {Instructions} from './components/instructions/instructions';

const routes: Routes = [
  {path: 'home', component: Home},
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'recipe', component: Recipe},
  {path: 'instructions/:id', component: Instructions }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
