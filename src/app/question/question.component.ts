import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

import { Question } from '../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements AfterViewInit {
  @Input()
  public question!: Question;

  public answers: string[] = [];
  public selectedAnswer: string | undefined;

  @Output()
  public isAnswered = new EventEmitter<boolean>();

  public ngAfterViewInit(): void {
    this.answers.push(this.question.correct_answer);
    this.answers.push(...this.question.incorrect_answers);
    this.durstenfeldShuffle(this.answers);
  }

  private durstenfeldShuffle<T>(array: T[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  public selectAnswer(answer: string): void {
    if (this.selectedAnswer !== answer) {
      this.selectedAnswer = answer;
      this.isAnswered.emit(true);
    } else {
      this.selectedAnswer = undefined;
      this.isAnswered.emit(false);
    }
  }
}
