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

  public currentGame!: QuizGame;

  constructor(private triviaService: TriviaService) {
  }

  public createQuiz(category: Category, difficulty: Difficulty): void {
    if (this.currentGame) {
      this.games.push(this.currentGame);
    }

    this.currentGame = new QuizGame();

    this.triviaService.getQuestions(category, difficulty).subscribe((questions) => {
      this.currentGame.questions = questions;
    });
  }

  public getIndexForCurrentGame(): number {
    return this.games.length;
  }
}
