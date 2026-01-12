import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RecipeSearchRequest} from '../../models/requests/recipe-search-request';
import {RecipeSearchService} from '../../services/recipe-search-service';
import { FormsModule } from '@angular/forms';
import {RecipeSearchResponse} from '../../models/responses/recipe-search-response';
import {RecipeModel} from '../../models/domain/recipe-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: false,
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe implements OnInit{
  searchRequest: RecipeSearchRequest = {query: ''};
  response!: RecipeSearchResponse;
  recipes: RecipeModel[] = [];

  constructor(private recipeService: RecipeSearchService, private cdr: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.recipeService.searchRecipeTest(this.searchRequest).subscribe({
    next: (response) => {
      this.response = response;
      this.recipes = response.results;
      console.log('response',this.response);
      this.cdr.detectChanges();
    },
      error: (error) => {
      console.error('Failed to fetch recipes', error);
    }
  });

  }

  trackById(index: number, recipe: RecipeModel) {
    return recipe.id;
  }

  viewInstructions(recipeId: number){
    console.log('viewInstructions', recipeId);
    this.router.navigate(['/instructions', recipeId]);
  }

}
