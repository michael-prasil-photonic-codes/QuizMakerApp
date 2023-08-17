import { Injectable } from '@angular/core';

import { TriviaService } from './trivia.service';
import { QuizGame } from './quiz-game.model';
import { Category } from './category.model';
import { Difficulty } from './difficulty.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private games: QuizGame[] = [];

  public currentGameIndex: number | undefined;
  public currentGame: QuizGame | undefined;

  constructor(private triviaService: TriviaService) {
  }

  public createQuiz(category: Category, difficulty: Difficulty): void {
    this.triviaService.getQuestions(category, difficulty).subscribe((questions) => {
      this.currentGame = new QuizGame();
      this.games.push(this.currentGame);
      this.currentGameIndex = this.games.length - 1;
      this.currentGame.questions = questions;
    });
  }

  public setAnswer(index: number, answer: string | undefined): void {
    if (this.currentGame) {
      this.currentGame.answers[index] = answer ? answer : '';
    }
  }

  public resetQuiz(): void {
    this.currentGame = undefined;
    this.currentGameIndex = undefined;
  }
}
