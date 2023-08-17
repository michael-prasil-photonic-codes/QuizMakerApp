import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements AfterViewInit {
  public constructor(private router: Router, public quizService: QuizService) {
  }

  public ngAfterViewInit(): void {
  }

  public createQuiz(): void {
  }
}
