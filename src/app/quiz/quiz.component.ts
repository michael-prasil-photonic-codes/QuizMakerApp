import { Component, EventEmitter, Input, Output } from '@angular/core';

import { QuizService } from '../quiz.service';
import { Questions } from '../questions.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  @Input()
  public questions!: Questions;

  public areAnswered: boolean[] = Array(5).fill(false);

  @Output()
  public isAnswered = new EventEmitter<boolean>();

  public constructor(public quizService: QuizService) {}

  public checkIfIsAnswered(index: number, answer: string | undefined): void {
    this.quizService.setAnswer(index, answer);
    this.areAnswered[index] = answer ? true : false;
    if (this.areAnswered.every((answered) => answered)) {
      this.isAnswered.emit(true);
    } else {
      this.isAnswered.emit(false);
    }
  }
}
