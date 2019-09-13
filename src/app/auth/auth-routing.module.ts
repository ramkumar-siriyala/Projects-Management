import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const authRoutes = [
  // { path: '', redirectTo: 'login' },
  { path: '', component: SigninComponent },
  // { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})


export class AuthRoutingModule { }
