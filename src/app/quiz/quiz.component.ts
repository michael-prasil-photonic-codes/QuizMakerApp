import { Component, Input } from '@angular/core';

import { Questions } from '../questions.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  @Input()
  public questions!: Questions;
}
