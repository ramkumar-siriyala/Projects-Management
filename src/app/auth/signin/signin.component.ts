import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
// import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { GlobalService } from 'src/app/_services/global.service';
import { AlertHandlersService } from 'src/app/_services/alert-handlers.service';
import { Events, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signInForm: FormGroup;
  user: User;

  // tslint:disable-next-line: max-line-length
  constructor(public authService: AuthService,
    public router: Router,
    public globalService: GlobalService,
    public alertHdlrService: AlertHandlersService,
    public events: Events,
    private formBuilder: FormBuilder, public afAuth: AngularFireAuth,
    public authenticationService:AuthenticationService,
    public menuCtrl: MenuController, ) {

    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log('SigninComponent');
  }

  ngOnInit() {
    this.signInForm.controls['email'].setValue('ramkumar.siriyala@gmail.com');
    this.signInForm.controls['password'].setValue('password');
    // this.onSignin();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    // this.signInForm.controls['email'].setValue('ramkumar.siriyala@gmail.com');
    // this.signInForm.controls['password'].setValue('password');
    // this.onSignin();
  }

  onSignin() {
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    console.log('form ', this.signInForm);
    // this.authService.signinUser(email, password);
    // this.authService.signinUser(email, password);
    // this.router.navigate(['noPage']);
    this.signinUser(email, password);
  }

  signinUser(email: string, password: string) {
    this.alertHdlrService.presentLoading();
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('signinUser ', response);
        console.log('user ', response.user);
        this.alertHdlrService.dismissLoading();
        this.user = response.user;
        this.globalService.user = response.user;
        this.authenticationService.setCurrentUser(this.user);
        // this.globalService.isLogin = true;
        this.events.publish('user:login', this.user, Date.now());
        console.log('this.user ', this.user);
        this.router.navigate(['/projects']);
        // firebase.auth().currentUser.getIdToken()
        //   .then(
        //     (token: string) => this.token = token
        //   );
      }
      )
      .catch(
        error => {
          this.alertHdlrService.dismissLoading();
          console.log(error);
          this.alertHdlrService.presentErrorAlert('Alert!', error.message);
          // alert(error.message);
        }

      );
  }

}
