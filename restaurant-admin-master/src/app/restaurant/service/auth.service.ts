import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth,private firestore: AngularFirestore) { }

  register(obj){
  return  this.auth.createUserWithEmailAndPassword(obj.email,obj.password).then((result=>{
    console.log(result.user.uid)
      const user={...obj,uid:result.user.uid}
      this.SetUserData(user)
      
    }))
  }

  SetUserData(user) {
    console.log(user)
    const userRef: AngularFirestoreDocument<any> = this.firestore.collection('hotel').doc(user.uid);
    
    const userData = {
      uid: user.uid,
      email: user.email,
      name: user.name,
      city: user.city,
      phone: user.phone
    }
   userRef.set(userData, {
      merge: true
    })
  }

}
