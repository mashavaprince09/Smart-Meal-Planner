import {TemperatureModel} from './temperature-model';

export interface EquipmentModel {
  id: number,
  name: string,
  image: string,
  temperature?: TemperatureModel,
  localizedName?: string
  }
