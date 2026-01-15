import { Injectable } from '@angular/core';
import {GenerateMealPlanDayResponse} from '../models/responses/generate-meal-plan-day-response';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {GenerateMealPlanRequest} from '../models/requests/generate-meal-plan-request';
import {environment} from '../../environments/environment';
import {FindByIngredientsResponse} from '../models/responses/find-by-ingredients-response';
import {GenerateMealPlanWeekResponse} from '../models/responses/generate-meal-plan-week-response';

@Injectable({
  providedIn: 'root',
})
export class GenerateMealPlanService {
  generateMealPlanResponseTest: GenerateMealPlanDayResponse = {
    "meals": [
      {
        "id": 655219,
        "title": "Peanut Butter And Chocolate Oatmeal",
        "imageType": "jpg",
        "readyInMinutes": 45,
        "servings": 1,
        "sourceUrl": "https://spoonacular.com/recipes/peanut-butter-and-chocolate-oatmeal-655219"
      },
      {
        "id": 649931,
        "title": "Lentil Salad With Vegetables",
        "imageType": "jpg",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "https://spoonacular.com/recipes/lentil-salad-with-vegetables-649931"
      },
      {
        "id": 632854,
        "title": "Asian Noodles",
        "imageType": "jpg",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "https://spoonacular.com/recipes/asian-noodles-632854"
      }
    ],
    "nutrients": {
      "calories": 1735.81,
      "carbohydrates": 235.17,
      "fat": 69.22,
      "protein": 55.43
    }
  };

  constructor(private httpClient: HttpClient) {

  }

  generateMealPlanTest(generateMealPlanRequest: GenerateMealPlanRequest): Observable<GenerateMealPlanDayResponse>{
    return of(this.generateMealPlanResponseTest);
  }

  generateMealDayPlan(generateMealPlanRequest: GenerateMealPlanRequest): Observable<GenerateMealPlanDayResponse>{
    const url = `${environment.apiBaseUrls.spoonacular}/mealplanner/generate`;
    console.log('GenerateMealPlanService generateMealPlan', url);
    return this.httpClient.get<GenerateMealPlanDayResponse>(url, {
      params: {
        apiKey: environment.apiKeys.spoonacular,
        timeFrame: generateMealPlanRequest.timeFrame,
        targetCalories: generateMealPlanRequest.targetCalories,
        diet: generateMealPlanRequest.diet,
        exclude: generateMealPlanRequest.exclude
      }
    })
  }

  generateMealWeekPlan(generateMealPlanRequest: GenerateMealPlanRequest): Observable<GenerateMealPlanWeekResponse>{
    const url = `${environment.apiBaseUrls.spoonacular}/mealplanner/generate`;
    console.log('GenerateMealPlanService generateMealPlan', url);
    return this.httpClient.get<GenerateMealPlanWeekResponse>(url, {
      params: {
        apiKey: environment.apiKeys.spoonacular,
        timeFrame: generateMealPlanRequest.timeFrame,
        targetCalories: generateMealPlanRequest.targetCalories,
        diet: generateMealPlanRequest.diet,
        exclude: generateMealPlanRequest.exclude
      }
    })
  }

}
