import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  name: string;
}

export interface Categories {
  trivia_categories: Category[];
}

export enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Categories> {
    console.log('LOL');
    return this.http.get<Categories>('https://opentdb.com/api_category.php');
  }

  public getQuestions() {
  }
}
