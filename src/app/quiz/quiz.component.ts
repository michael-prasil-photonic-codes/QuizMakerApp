import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Questions } from '../questions.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  @Input()
  public questions!: Questions;

  public areAnswered: boolean[] = Array(5).fill(false);

  @Output()
  public isAnswered = new EventEmitter<boolean>();

  public checkIfIsAnswered(index: number, isAnswered: boolean): void {
    this.areAnswered[index] = isAnswered;
    if (this.areAnswered.every((answered) => answered)) {
      this.isAnswered.emit(true);
    }
  }
}
