import { Component } from '@angular/core';
import { Events, MenuController } from '@ionic/angular';


import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './_services/global.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  currentUser: User;
  isLogin = false;
  // displayMenu = 'none';
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: 'create'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public globalService: GlobalService,
    public events: Events,
    public router: Router,
    public menuCtrl: MenuController,
    private authenticationService: AuthenticationService
  ) {
    this.initializeApp();
    events.subscribe('user:login', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome user:created', user, 'at', time);
      this.isLogin = true;
      // this.displayMenu = 'block';
    });

    events.subscribe('user:logout', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('logout user:created', user, 'at', time);
      this.isLogin = false;
      // this.displayMenu = 'none';
    });

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }

  logoutClick() {

    // this.globalService.isLogin = false;
    // this.events.publish('user:logout');
    this.authenticationService.logout();
    this.router.navigate(['/auth']);
  }
}
