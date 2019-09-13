import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  user: User;
  project: any;
  constructor() { }
  setProject(project){
    this.project = project;
  }

  getProject(){
    return this.project;
  }
}
