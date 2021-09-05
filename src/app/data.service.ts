import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Business, CONTENT } from './mock-content'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getContent(): Observable<Business[]> {
    return of(CONTENT)
  }
}
