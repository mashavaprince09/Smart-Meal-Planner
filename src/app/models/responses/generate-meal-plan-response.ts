import {MealModel} from '../domain/meal-model';
import {NutrientsModel} from '../domain/nutrients-model';

export interface GenerateMealPlanResponse{
  meals: MealModel[];
  nutrients: NutrientsModel;
}
