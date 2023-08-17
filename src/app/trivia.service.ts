import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from './category.model';
import { Categories } from './categories.model';
import { Difficulty } from './difficulty.model';
import { Questions } from './questions.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Categories> {
    return this.http.get<Categories>('https://opentdb.com/api_category.php');
  }

  public getQuestions(categrory: Category, difficulty: Difficulty): Observable<Questions> {
    return this.http.get<Questions>(`https://opentdb.com/api.php?amount=5&category=${categrory.id}&difficulty=${difficulty.toLowerCase()}&type=multiple`);
  }
}
