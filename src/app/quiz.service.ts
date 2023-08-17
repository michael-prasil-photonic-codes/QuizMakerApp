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

  public currentGameIndex!: number;
  public currentGame!: QuizGame;

  constructor(private triviaService: TriviaService) {
  }

  public createQuiz(category: Category, difficulty: Difficulty): void {
    this.currentGame = new QuizGame();
    this.games.push(this.currentGame);
    this.currentGameIndex = this.games.length - 1;
    this.triviaService.getQuestions(category, difficulty).subscribe((questions) => {
      this.currentGame.questions = questions;
    });
  }
}
