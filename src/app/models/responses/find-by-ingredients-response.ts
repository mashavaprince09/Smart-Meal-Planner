import {MissedIngredientModel} from '../domain/missed-ingredient-model';
import {UnusedIngredientModel} from '../domain/unused-ingredient-model';
import {UsedIngredientModel} from '../domain/used-ingredient-model';

export interface FindByIngredientsResponse{
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: MissedIngredientModel[];
  title: string;
  unusedIngredients: UnusedIngredientModel[];
  usedIngredientCount: number;
  usedIngredients: UsedIngredientModel[];
}
