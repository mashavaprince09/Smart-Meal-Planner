import {GenerateMealPlanDayResponse} from '../responses/generate-meal-plan-day-response';

export interface GenerateMealPlanWeekModel {
  monday: GenerateMealPlanDayResponse
  tuesday: GenerateMealPlanDayResponse
  wednesday: GenerateMealPlanDayResponse
  thursday: GenerateMealPlanDayResponse
  friday: GenerateMealPlanDayResponse
  saturday: GenerateMealPlanDayResponse
  sunday: GenerateMealPlanDayResponse
}
