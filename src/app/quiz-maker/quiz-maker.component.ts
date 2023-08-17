import { AfterViewInit, Component } from '@angular/core';

import { TriviaService } from '../trivia.service';
import { Category } from '../category.model';
import { Categories } from '../categories.model';
import { Difficulty } from '../difficulty.model';
import { Questions } from '../questions.model';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.scss']
})
export class QuizMakerComponent implements AfterViewInit {
  public categories!: Categories;
  public category!: Category;

  public difficulties: string[];
  public difficulty: Difficulty;

  public questions!: Questions;

  public isAnswered: boolean;

  public constructor(private triviaService: TriviaService) {
    this.difficulties = Object.keys(Difficulty);
    this.difficulty = Difficulty.Easy;
    this.isAnswered = false;
  }

  public ngAfterViewInit(): void {
    this.triviaService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.category = this.categories.trivia_categories[0];
    });
  }

  public onCategorySelected(value: string): void {
    const categoryForid = this.categories.trivia_categories.find((category) => category.id === Number(value));
    this.category = categoryForid ? categoryForid : this.categories.trivia_categories[0];
  }

  public onDifficultySelected(value: string): void {
    this.difficulty = value as Difficulty;
  }

  public createQuiz(): void {
    this.triviaService.getQuestions(this.category, this.difficulty).subscribe((questions) => {
      this.questions = questions;
    });
  }

  public checkIfIsAnswered(isAnswered: boolean): void {
    this.isAnswered = isAnswered;
  }

  public submit(): void {
    console.log('Submit');
  }
}
