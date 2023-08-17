import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizMakerComponent } from './quiz-maker/quiz-maker.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';

const routes: Routes = [
  { path: '', component: QuizMakerComponent },
  { path: ':id', component: QuizResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
