import { Questions } from './questions.model';

export class QuizGame {
  public questions!: Questions;
  public answers: string[];

  public constructor() {
    this.answers = Array(5).fill('');
  }
}
