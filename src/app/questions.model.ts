import { Question } from './question.model';

export interface Questions {
  response_code: number;
  results: Question[];
}
