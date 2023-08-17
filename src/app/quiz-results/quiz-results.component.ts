import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Questions } from '../questions.model';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements AfterViewInit {
  public questions!: Questions;

  public constructor(private router: Router) {
  }

  public ngAfterViewInit(): void {
  }

  public createQuiz(): void {
  }
}
