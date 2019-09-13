import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  // firebaseURL = 'https://loancalc-3b06f.firebaseio.com/';
  // token: any;
  constructor(public httpClient: HttpClient, private firestore: AngularFirestore) { }

  // createProject(customerObj) {
  //   return this.httpClient.put(this.firebaseURL + 'projects/' + customerObj.refNo + '.json?auth=' + token, customerObj)
  //   .subscribe(data => {
  //     console.log(data);
  //    }, error => {
  //     console.log(error);
  //   });
  // }

  // createProject(data) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.firestore
  //       .collection('Projects')
  //       .add(data)
  //       .then(res => { }, err => reject(err));
  //   });
  // }

  createProject(project) {
    return this.firestore.collection('Projects').add(project);
  }
  getProjects() {
    return this.firestore.collection('Projects').snapshotChanges();
  }
  updateProject(projectId, project) {
    this.firestore.doc('Projects/' + projectId).update(project);
  }
 
  deleteProject(projectId) {
   return this.firestore.doc('Projects/' + projectId).delete();
  }

  createModule(projectId, module) {
    return this.firestore.collection('Projects').doc(projectId).collection('/modules').add(module);
  }

  getModules(projectId) {
    return this.firestore.collection('Projects').doc(projectId).collection('/modules').snapshotChanges();
  }

  createSubModule(projectId, moduleId, module) {
    return this.firestore.collection('Projects').doc(projectId).collection('/modules').doc(moduleId).collection('/subModules').add(module);
  }

  getSubModules(projectId, moduleId) {
    // tslint:disable-next-line: max-line-length
    return this.firestore.collection('Projects').doc(projectId).collection('/modules').doc(moduleId).collection('/subModules').snapshotChanges();
  }
}
