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
  generateMealPlanDayResponseTest: GenerateMealPlanDayResponse = {
    "meals": [
      {
        "id": 652864,
        "image": "My-Grandmothers-Migas-652864.jpg",
        "imageType": "jpg",
        "title": "My Grandmother's Migas",
        "readyInMinutes": 45,
        "servings": 8,
        "sourceUrl": "https://www.foodista.com/recipe/Q7JJSL2N/my-grandmothers-migas"
      },
      {
        "id": 1502521,
        "image": "crack-chicken-chili-1502521.jpg",
        "imageType": "jpg",
        "title": "Crack Chicken Chili",
        "readyInMinutes": 30,
        "servings": 6,
        "sourceUrl": "https://www.pinkwhen.com/crack-chicken-chili/"
      },
      {
        "id": 650878,
        "image": "Maple-and-Mustard-Glazed-Salmon-650878.jpg",
        "imageType": "jpg",
        "title": "Maple and Mustard-Glazed Salmon",
        "readyInMinutes": 45,
        "servings": 2,
        "sourceUrl": "http://www.foodista.com/recipe/HY26S4X6/maple-and-mustard-glazed-salmon"
      }
    ],
    "nutrients": {
      "calories": 1000.06,
      "protein": 73.29,
      "fat": 56.84,
      "carbohydrates": 48.13
    }
  };

  generateMealPlanWeekResponseTest: GenerateMealPlanWeekResponse = {
    "week": {
      "monday": {
        "meals": [
          {
            "id": 639728,
            "image": "Coconut-Bliss-Smoothie-639728.jpg",
            "imageType": "jpg",
            "title": "Coconut Bliss Smoothie",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/X7QGVRXJ/coconut-bliss-smoothie"
          },
          {
            "id": 643633,
            "image": "Fresh-Tomato-Mozzarella-Salad-643633.jpg",
            "imageType": "jpg",
            "title": "Fresh Tomato Mozzarella Side Salad",
            "readyInMinutes": 15,
            "servings": 8,
            "sourceUrl": "https://www.foodista.com/recipe/D2XV3M76/fresh-tomato-mozzarella-salad"
          },
          {
            "id": 641072,
            "image": "Curried-Chickpeas-and-Vegetables-641072.jpg",
            "imageType": "jpg",
            "title": "Curried Chickpeas and Vegetables",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "https://www.foodista.com/recipe/HD7DHP8M/curried-chickpeas-and-vegetables"
          }
        ],
        "nutrients": {
          "calories": 999.97,
          "protein": 32.89,
          "fat": 52.78,
          "carbohydrates": 110.36
        }
      },
      "tuesday": {
        "meals": [
          {
            "id": 641781,
            "image": "Earl-Grey-Raisin-Muffin-641781.jpg",
            "imageType": "jpg",
            "title": "Earl Grey Raisin Muffin",
            "readyInMinutes": 45,
            "servings": 10,
            "sourceUrl": "https://www.foodista.com/recipe/JTFC63PL/earl-grey-raisin-muffin"
          },
          {
            "id": 1098387,
            "image": "quinoa-salad-with-barberries-nuts-1098387.jpg",
            "imageType": "jpg",
            "title": "Quinoa Salad with Barberries & Nuts",
            "readyInMinutes": 30,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/PBQJCDDG/quinoa-salad-with-barberries-nuts"
          },
          {
            "id": 634618,
            "image": "Beef-Green-Chile-Stew-634618.jpg",
            "imageType": "jpg",
            "title": "Beef Green Chile Stew",
            "readyInMinutes": 45,
            "servings": 10,
            "sourceUrl": "https://www.foodista.com/recipe/XM33C6MQ/beef-green-chile-stew"
          }
        ],
        "nutrients": {
          "calories": 1000.09,
          "protein": 48.57,
          "fat": 43.1,
          "carbohydrates": 107.46
        }
      },
      "wednesday": {
        "meals": [
          {
            "id": 1697767,
            "image": "the-perfect-scrambled-eggs-every-time-1697767.jpg",
            "imageType": "jpg",
            "title": "The Perfect Scrambled Eggs - Every Time",
            "readyInMinutes": 10,
            "servings": 2,
            "sourceUrl": "https://maplewoodroad.com/scrambled-eggs/"
          },
          {
            "id": 639954,
            "image": "Colorful-Wild-Rice-Salad-639954.jpg",
            "imageType": "jpg",
            "title": "Colorful Wild Rice Salad",
            "readyInMinutes": 30,
            "servings": 3,
            "sourceUrl": "https://www.foodista.com/recipe/RRSS27DD/colorful-wild-rice-salad"
          },
          {
            "id": 645634,
            "image": "Grilled-Chicken-Banh-Mi-645634.jpg",
            "imageType": "jpg",
            "title": "Grilled Chicken Banh Mi",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/2Q34KBV6/grilled-chicken-banh-mi"
          }
        ],
        "nutrients": {
          "calories": 1000.05,
          "protein": 50.78,
          "fat": 39.06,
          "carbohydrates": 115.52
        }
      },
      "thursday": {
        "meals": [
          {
            "id": 663845,
            "image": "TROPICAL-BANANA-GREEN-SMOOTHIE-663845.jpg",
            "imageType": "jpg",
            "title": "TROPICAL BANANA GREEN SMOOTHIE",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "https://www.foodista.com/recipe/PJH3CT2M/tropical-banana-green-smoothie"
          },
          {
            "id": 644306,
            "image": "Garlic-Lime-Grilled-Chicken-Salad-644306.jpg",
            "imageType": "jpg",
            "title": "Garlic Lime Grilled Chicken Salad",
            "readyInMinutes": 30,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/2HFYQSNY/garlic-lime-grilled-chicken-salad"
          },
          {
            "id": 642941,
            "image": "Fish-Fillet-In-Creamy-Coconut-Curry-642941.jpg",
            "imageType": "jpg",
            "title": "Fish Fillet In Creamy Coconut Curry",
            "readyInMinutes": 30,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/HTY4BWWJ/fish-fillet-in-creamy-coconut-curry"
          }
        ],
        "nutrients": {
          "calories": 1000.01,
          "protein": 96.97,
          "fat": 36.13,
          "carbohydrates": 82.87
        }
      },
      "friday": {
        "meals": [
          {
            "id": 644898,
            "image": "Gluten-free-Pumpkin-Doughnut-Holes-(a-k-a--Mini-Muffins)-644898.jpg",
            "imageType": "jpg",
            "title": "Gluten-free Pumpkin Doughnut Holes (a.k.a. Mini Muffins)",
            "readyInMinutes": 45,
            "servings": 48,
            "sourceUrl": "https://www.foodista.com/recipe/ZCPQNKPP/gluten-free-pumpkin-doughnut-holes-a-k-a-mini-muffins"
          },
          {
            "id": 1098387,
            "image": "quinoa-salad-with-barberries-nuts-1098387.jpg",
            "imageType": "jpg",
            "title": "Quinoa Salad with Barberries & Nuts",
            "readyInMinutes": 30,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/PBQJCDDG/quinoa-salad-with-barberries-nuts"
          },
          {
            "id": 1515525,
            "image": "copycat-chick-fil-a-chicken-sandwich-1515525.jpg",
            "imageType": "jpg",
            "title": "Copycat Chick Fil A Chicken Sandwich",
            "readyInMinutes": 50,
            "servings": 4,
            "sourceUrl": "https://www.pinkwhen.com/copycat-chick-fil-a-chicken-sandwich/"
          }
        ],
        "nutrients": {
          "calories": 1000.09,
          "protein": 51.05,
          "fat": 33.99,
          "carbohydrates": 122.41
        }
      },
      "saturday": {
        "meals": [
          {
            "id": 639726,
            "image": "Coconut-Banana-Nut-Bread-639726.jpg",
            "imageType": "jpg",
            "title": "Coconut Banana Nut Bread",
            "readyInMinutes": 45,
            "servings": 12,
            "sourceUrl": "https://www.foodista.com/recipe/BTJNM7HB/coconut-banana-nut-bread"
          },
          {
            "id": 632797,
            "image": "Asian-Beef-632797.jpg",
            "imageType": "jpg",
            "title": "Asian Beef",
            "readyInMinutes": 20,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/3LR274HL/asian-beef"
          },
          {
            "id": 663078,
            "image": "Thai-Chicken-Wraps-663078.jpg",
            "imageType": "jpg",
            "title": "Thai \"Chicken\" Wraps",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/W8JB7TL3/thai-chicken-wraps"
          }
        ],
        "nutrients": {
          "calories": 999.91,
          "protein": 49.07,
          "fat": 52.85,
          "carbohydrates": 88.88
        }
      },
      "sunday": {
        "meals": [
          {
            "id": 644690,
            "image": "Gingerbread-Pancakes-644690.jpg",
            "imageType": "jpg",
            "title": "Gingerbread Pancakes",
            "readyInMinutes": 45,
            "servings": 16,
            "sourceUrl": "http://www.foodista.com/recipe/G6HS2YYQ/gingerbread-pancakes"
          },
          {
            "id": 716297,
            "image": "breaded-shrimp-and-spicy-mayo-716297.jpg",
            "imageType": "jpg",
            "title": "Breaded Shrimp and Spicy Mayo Appetizer",
            "readyInMinutes": 20,
            "servings": 4,
            "sourceUrl": "https://www.afrolems.com/2013/10/13/breaded-shrimp-and-spicy-mayo/"
          },
          {
            "id": 657682,
            "image": "Quinoa-Stuffed-Mushrooms-657682.jpg",
            "imageType": "jpg",
            "title": "Quinoa Stuffed Mushrooms",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "https://www.foodista.com/recipe/HZTZ37BH/quinoa-stuffed-mushrooms"
          }
        ],
        "nutrients": {
          "calories": 999.97,
          "protein": 38.14,
          "fat": 34.4,
          "carbohydrates": 139.93
        }
      }
    }
  };

  constructor(private httpClient: HttpClient) {

  }

  generateMealPlanDayTest(generateMealPlanRequest: GenerateMealPlanRequest): Observable<GenerateMealPlanDayResponse>{
    return of(this.generateMealPlanDayResponseTest);
  }

  generateMealPlanWeekTest(generateMealPlanRequest: GenerateMealPlanRequest): Observable<GenerateMealPlanWeekResponse>{
    return of(this.generateMealPlanWeekResponseTest);
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
