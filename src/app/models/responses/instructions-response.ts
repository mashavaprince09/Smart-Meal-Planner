import {StepModel} from '../domain/step-model';

export interface InstructionsResponse {
  name: string,
  steps: StepModel[]
}
