import { Component } from '@angular/core';
// import core firebase client (required)
import firebase from '@firebase/app';
// import Firebase Realtime Database (optional)
import '@firebase/database';
// import Cloud Firestore (optional)
import '@firebase/firestore';
// import Firebase Authentication (optional)
import '@firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    const config = {
      apiKey: "AIzaSyDkaBJ_29CsboVA_KaTpuZvOa8AgiCJ9HQ",
      authDomain: "ocbooks-16f63.firebaseapp.com",
      databaseURL: "https://ocbooks-16f63.firebaseio.com",
      projectId: "ocbooks-16f63",
      storageBucket: "ocbooks-16f63.appspot.com",
      messagingSenderId: "487125831997",
      appId: "1:487125831997:web:bc9929213ce3bc4308b554",
      measurementId: "G-SWPB818P6Y"
    };
    firebase.initializeApp(config);
//    firebase.analytics();

  }
}
