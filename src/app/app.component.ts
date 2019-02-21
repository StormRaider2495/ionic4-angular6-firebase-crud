import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBxqYcusxkFqgGdGTw6QCyyDqUeg2A8nYE',
  authDomain: 'bulletinboard-e03c0.firebaseapp.com',
  databaseURL: 'https://bulletinboard-e03c0.firebaseio.com',
  projectId: 'bulletinboard-e03c0',
  storageBucket: 'bulletinboard-e03c0.appspot.com',
  messagingSenderId: '1044295125404'
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
