import {EquipmentModel} from './equipment-model';
import {IngredientModel} from './ingredient-model';
import {LengthModel} from './length-model';

export interface StepModel{
  number: number,
  step: string,
  length?: LengthModel,
  equipment?: EquipmentModel[],
  ingredients?: IngredientModel[],
}
