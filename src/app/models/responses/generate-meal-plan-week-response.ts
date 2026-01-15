import {MealModel} from '../domain/meal-model';

export interface GenerateMealPlanWeekResponse{
  monday: MealModel[];
  tuesday: MealModel[];
  wednesday: MealModel[];
  thursday: MealModel[];
  friday: MealModel[];
  saturday: MealModel[];
  sunday: MealModel[];
}
