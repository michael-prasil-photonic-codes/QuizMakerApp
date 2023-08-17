import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { TriviaService } from '../trivia.service';
import { QuizService } from '../quiz.service';
import { Category } from '../category.model';
import { Categories } from '../categories.model';
import { Difficulty } from '../difficulty.model';

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

  public isAnswered: boolean;

  public constructor(private router: Router, private triviaService: TriviaService, public quizService: QuizService) {
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
    const categoryForId = this.categories.trivia_categories.find((category) => category.id === Number(value));
    this.category = categoryForId ? categoryForId : this.categories.trivia_categories[0];
  }

  public onDifficultySelected(value: string): void {
    this.difficulty = value as Difficulty;
  }

  public createQuiz(): void {
    this.quizService.createQuiz(this.category, this.difficulty);
  }

  public checkIfIsAnswered(isAnswered: boolean): void {
    this.isAnswered = isAnswered;
  }

  public submit(): void {
    this.router.navigate(['/', 1]);
  }
}
