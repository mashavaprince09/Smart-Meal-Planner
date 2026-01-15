import { Injectable } from '@angular/core';
import {GenerateMealPlanResponse} from '../models/responses/generate-meal-plan-response';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {GenerateMealPlanRequest} from '../models/requests/generate-meal-plan-request';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class GenerateMealPlanService {

  constructor(private httpClient: HttpClient) {

  }

  generateMealPlan(generateMealPlanRequest: GenerateMealPlanRequest): Observable<GenerateMealPlanResponse>{
    const url = `${environment.apiBaseUrls.spoonacular}/mealplanner/generate`;
    console.log('GenerateMealPlanService generateMealPlan', url);
    return this.httpClient.get<GenerateMealPlanResponse>(url, {
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
