export interface FindByIngredientsRequest {
  ingredients: string[];
  number: number;
  ranking: number;
  ignorePantry?: boolean;
}
