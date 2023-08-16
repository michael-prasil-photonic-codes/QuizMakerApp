import { AfterViewInit, Component } from '@angular/core';

import { Categories, Category, Difficulty, TriviaService } from '../trivia.service';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.scss']
})
export class QuizMakerComponent implements AfterViewInit {
  public categories!: Categories;
  public difficulties: string[];

  public category!: Category;
  public difficulty: Difficulty;

  public constructor(private triviaService: TriviaService) {
    this.difficulties = Object.keys(Difficulty);
    this.difficulty = Difficulty.Easy;
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
      console.log(questions);
    });
  }
}
