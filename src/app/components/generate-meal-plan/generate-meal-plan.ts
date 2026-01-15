import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GenerateMealPlanService} from '../../services/generate-meal-plan-service';
import {GenerateMealPlanDayResponse} from '../../models/responses/generate-meal-plan-day-response';
import {GenerateMealPlanRequest} from '../../models/requests/generate-meal-plan-request';
import {FormsModule} from '@angular/forms';
import {GenerateMealPlanWeekResponse} from '../../models/responses/generate-meal-plan-week-response';

@Component({
  selector: 'app-generate-meal-plan',
  standalone: false,
  templateUrl: './generate-meal-plan.html',
  styleUrl: './generate-meal-plan.css',
})
export class GenerateMealPlan implements OnInit{

  generateMealPlanDayResponse: GenerateMealPlanDayResponse | null = null;
  generateMealPlanWeekResponse: GenerateMealPlanWeekResponse | null = null;
  generateMealPlanRequest: GenerateMealPlanRequest = {timeFrame: '', targetCalories: 1000, diet: '', exclude: ''};

  constructor(private generateMealPlanService: GenerateMealPlanService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log('Generating meal plan...', this.generateMealPlanRequest);
    if (this.generateMealPlanRequest.timeFrame === 'day') {
      this.generateMealPlanService.generateMealDayPlan(this.generateMealPlanRequest).subscribe({
        next: (response) => {
          this.generateMealPlanDayResponse = response;
          this.cdr.detectChanges();
          console.log('Meal plan generated:', this.generateMealPlanDayResponse);
        },
        error: (error) => {
          console.error('Error generating meal plan:', error);
        }
      });
    }
    else {
      this.generateMealPlanService.generateMealWeekPlan(this.generateMealPlanRequest).subscribe({
        next: (response) => {
          this.generateMealPlanWeekResponse = response;
          this.cdr.detectChanges();
          console.log('Meal plan generated:', this.generateMealPlanWeekResponse);
        },
        error: (error) => {
          console.error('Error generating meal plan:', error);
        }
      });
    }

  }


}
