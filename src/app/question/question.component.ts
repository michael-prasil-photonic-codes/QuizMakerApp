import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

import { QuizService } from '../quiz.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements AfterViewInit {
  @Input()
  public question!: Question;
  @Input()
  public initialAnswer: string | undefined;

  public answers: string[] = [];
  public selectedAnswer: string | undefined;

  @Output()
  public answered = new EventEmitter<string | undefined>();

  public constructor(public quizService: QuizService) {
  }

  public ngAfterViewInit(): void {
    this.answers.push(this.question.correct_answer);
    this.answers.push(...this.question.incorrect_answers);
    this.durstenfeldShuffle(this.answers);
    if (this.initialAnswer && this.answers.includes(this.initialAnswer)) {
      this.selectedAnswer = this.initialAnswer;
      this.answered.emit(this.selectedAnswer);
    }
  }

  private durstenfeldShuffle<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  public getClass(answer: string): string {
    if (this.quizService.isEditable) {
      if (this.selectedAnswer === answer) {
        return 'selectedAnswer';
      } else {
        return 'answer';
      }
    } else {
      if (this.selectedAnswer === answer && this.selectedAnswer !== this.question.correct_answer) {
        return 'wrongAnswer';
      } else if (this.question.correct_answer === answer) {
        return 'selectedAnswer';
      } else {
        return 'answer';
      }
    }
  }

  public selectAnswer(answer: string): void {
    if (this.quizService.isEditable) {
      this.selectedAnswer = this.selectedAnswer !== answer ? answer : undefined;
      this.answered.emit(this.selectedAnswer);
    }
  }
}
