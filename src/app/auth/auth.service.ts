import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  // signupUser(email: string, password: string) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .catch(
  //       error => console.log(error)
  //     );
  // }

  // signinUser(email: string, password: string) {
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(response => {
  //       console.log('signinUser ', response);
  //       // this.router.navigate(['projects']);
  //       // this.router.navigate(['create']);
  //       // this.router.navigateByUrl('/projects');
  //       this.router.navigate(['/projects']);
  //       firebase.auth().currentUser.getIdToken()
  //         .then(
  //           (token: string) => this.token = token
  //         );
  //     }
  //     )
  //     .catch(
  //       error => {
  //         console.log(error);
  //         alert(error.message);
  //       }

  //     );
  // }

  // logout() {
  //   firebase.auth().signOut();
  //   this.token = null;
  // }

  // getToken() {
  //   firebase.auth().currentUser.getIdToken()
  //     .then(
  //       (token: string) => this.token = token
  //     );
  //   return this.token;
  // }

  // isAuthenticated() {
  //   return this.token != null;
  // }
}
