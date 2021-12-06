import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { FireBusiness } from './business';
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
    console.log("Data service query executed!!")
    const collectionRef = this.db.collection<FireBusiness>('businesses');
    return collectionRef.get();
  }



}
