import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

export interface Category {
  id: number;
  name: string;
}

export interface Categories {
  trivia_categories: Category[];
}

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  constructor(private http: HttpClient) {
  }

  public getCategories() {
    return this.http.get<Categories>('https://opentdb.com/api_category.php');
  }

  public getQuestions() {
  }
}
