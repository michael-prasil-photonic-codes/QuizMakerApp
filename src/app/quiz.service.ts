import { Injectable } from '@angular/core';

import { TriviaService } from './trivia.service';
import { QuizGame } from './quiz-game.model';
import { Category } from './category.model';
import { Difficulty } from './difficulty.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public currentGame: QuizGame | undefined;

  public isEditable: boolean;

  constructor(private triviaService: TriviaService) {
    this.isEditable = false;
  }

  public createQuiz(category: Category, difficulty: Difficulty): void {
    this.triviaService.getQuestions(category, difficulty).subscribe((questions) => {
      this.currentGame = new QuizGame();
      this.currentGame.questions = questions;
    });
  }

  public setAnswer(index: number, answer: string | undefined): void {
    if (this.currentGame) {
      this.currentGame.answers[index] = answer ? answer : '';
    }
  }

  public getScore(): number {
    if (!this.currentGame) {
      return NaN;
    }

    let score: number = 0;

    for (let index = 0; index < this.currentGame.questions.results.length; index++) {
      if (this.currentGame.questions.results[index].correct_answer === this.currentGame.answers[index]) {
        // console.log(`${this.currentGame.questions.results[index].correct_answer} === ${this.currentGame.answers[index]}`);
        score++;
      }
    }

    return score;
  }

  public resetQuiz(): void {
    this.currentGame = undefined;
  }
}
