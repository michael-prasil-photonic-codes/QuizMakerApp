import { AfterViewInit, Component, Input } from '@angular/core';

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

  public ngAfterViewInit(): void {
    this.answers.push(this.question.correct_answer);
    this.answers.push(...this.question.incorrect_answers);
    this.durstenfeldShuffle(this.answers);
  }

  private durstenfeldShuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
