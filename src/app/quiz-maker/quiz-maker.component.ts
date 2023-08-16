import { AfterViewInit, Component } from '@angular/core';

import { Categories, Difficulty, TriviaService } from '../trivia.service';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.scss']
})
export class QuizMakerComponent implements AfterViewInit {
  public categories!: Categories;
  public difficulties!: string[];

  public constructor(private triviaService: TriviaService) {
  }

  public ngAfterViewInit(): void {
    this.triviaService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.difficulties = Object.keys(Difficulty);
  }

  public createQuiz(): void {
  }
}
