import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements AfterViewInit {
  public score: number;

  public constructor(
    private router: Router,
    public quizService: QuizService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.score = NaN;
  }

  public ngAfterViewInit(): void {
    this.score = this.quizService.getScore();
    this.changeDetectorRef.detectChanges();
  }

  public getColorForScore(): string {
    if (this.score >= 4) {
      return 'good-score';
    } else if (this.score >= 2) {
      return 'okay-score';
    } else if (this.score >= 0) {
      return 'bad-score';
    } else {
      return 'loading-score';
    }
  }

  public createQuiz(): void {
    this.quizService.resetQuiz();
    this.quizService.isEditable = true;
    this.router.navigate(['/']);
  }
}
