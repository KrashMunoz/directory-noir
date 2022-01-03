import { Injectable } from '@angular/core';
import { AngularFirestore, fromCollectionRef } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { DNoirBusiness, FireBusiness } from './business';
import { Business, CONTENT } from './mock-content'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private db: AngularFirestore) { }

  getContent(): Observable<Business[]> {
    return of(CONTENT)
  }

  getBusinesses() {
    const collectionRef = this.db.collection<FireBusiness>('businesses', ref => ref.orderBy("name", "asc"));
    return collectionRef.get();
  }

  getTests() {
    const testRef = this.db.collection<DNoirBusiness>('dnoir-test', ref => ref.orderBy('Category', 'asc'));
    return testRef.get();
  }



}
