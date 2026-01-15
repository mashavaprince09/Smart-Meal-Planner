import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GenerateMealPlanService} from '../../services/generate-meal-plan-service';
import {GenerateMealPlanResponse} from '../../models/responses/generate-meal-plan-response';
import {GenerateMealPlanRequest} from '../../models/requests/generate-meal-plan-request';

@Component({
  selector: 'app-generate-meal-plan',
  standalone: false,
  templateUrl: './generate-meal-plan.html',
  styleUrl: './generate-meal-plan.css',
})
export class GenerateMealPlan implements OnInit{

  generateMealPlanResponse!: GenerateMealPlanResponse;
  generateMealPlanRequest: GenerateMealPlanRequest = {timeFrame: 'day', targetCalories: 2000, diet: 'vegetarian', exclude: ''};

  constructor(private generateMealPlanService: GenerateMealPlanService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    console.log('Generating meal plan...', this.generateMealPlanRequest);
    this.generateMealPlanService.generateMealPlan(this.generateMealPlanRequest).subscribe({
      next: (response) => {
        this.generateMealPlanResponse = response;
        this.cdr.detectChanges();
        console.log('Meal plan generated:', this.generateMealPlanResponse);
      },
      error: (error) => {
        console.error('Error generating meal plan:', error);
      }
    });
  }


}
