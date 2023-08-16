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

export enum Type {
  Multiple = 'multiple',
}

export enum Difficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export interface Question {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Questions {
  response_code: number;
  results: Question[];
}

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
    return this.http.get<Questions>(`https://opentdb.com/api.php?amount=5&category=${categrory.id}&difficulty=${difficulty}&type=multiple`);
  }
}
