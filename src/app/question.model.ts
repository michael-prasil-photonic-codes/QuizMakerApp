import { Type } from './type.model';
import { Difficulty } from './difficulty.model';

export interface Question {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
