import {RecipeModel} from '../domain/recipe-model';

export interface RecipeSearchResponse {
  offset: number;
  number: number;
  results: RecipeModel[];
  totalResults: number;
}
