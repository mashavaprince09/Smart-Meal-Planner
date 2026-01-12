import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeSearchRequest} from '../models/requests/recipe-search-request';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {RecipeSearchResponse} from '../models/responses/recipe-search-response';

@Injectable({
  providedIn: 'root',
})
export class RecipeSearchService {
  recipesTest: RecipeSearchResponse = {
    "results": [
      {
        "id": 648279,
        "title": "Italian Tuna Pasta",
        "image": "https://img.spoonacular.com/recipes/648279-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 648247,
        "title": "Italian Seafood Stew",
        "image": "https://img.spoonacular.com/recipes/648247-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 648259,
        "title": "Italian String Beans With Anchovies and Breadcrumbs",
        "image": "https://img.spoonacular.com/recipes/648259-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 715769,
        "title": "Broccolini Quinoa Pilaf",
        "image": "https://img.spoonacular.com/recipes/715769-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 648238,
        "title": "Italian Sausage and Vegetable Soup",
        "image": "https://img.spoonacular.com/recipes/648238-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 648275,
        "title": "Italian Tomato and Mozzarella Caprese",
        "image": "https://img.spoonacular.com/recipes/648275-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 648190,
        "title": "Italian Pasta Salad with organic Arugula",
        "image": "https://img.spoonacular.com/recipes/648190-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 648048,
        "title": "Italian Beef Braciole",
        "image": "https://img.spoonacular.com/recipes/648048-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 648176,
        "title": "Italian Meatloaf with Hard Boiled Eggs",
        "image": "https://img.spoonacular.com/recipes/648176-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 659109,
        "title": "Salmon Quinoa Risotto",
        "image": "https://img.spoonacular.com/recipes/659109-312x231.jpg",
        "imageType": "jpg"
      }
    ],
    "offset": 0,
    "number": 10,
    "totalResults": 273
  }


  constructor(private httpClient: HttpClient) { }

  searchRecipe(request: RecipeSearchRequest): Observable<RecipeSearchResponse> {
    const url = `${environment.apiBaseUrls.spoonacular}/recipes/complexSearch?apiKey=${environment.apiKeys.spoonacular}&query=${request.query}`;
    return this.httpClient.get<RecipeSearchResponse>(url);
  }

  searchRecipeTest(request: RecipeSearchRequest): Observable<RecipeSearchResponse> {
    return of(this.recipesTest)
  }

}
