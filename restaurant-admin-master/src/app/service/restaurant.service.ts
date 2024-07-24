import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private firestore: AngularFirestore) { }

  getRestaurant(){
    return this.firestore.collection('hotel').snapshotChanges();
  }
}
