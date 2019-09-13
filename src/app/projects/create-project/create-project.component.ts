import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';
import { ModalController, MenuController } from '@ionic/angular';
import { CreateProjectModalComponent } from '../create-project-modal/create-project-modal.component';
import { ApisService } from 'src/app/_services/apis.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.sass']
})
export class CreateProjectComponent implements OnInit {

  projects: any;

  constructor(public globalService: GlobalService,
    public modalCtrl: ModalController,
    public apisService: ApisService,
    public router: Router,
    public menuCtrl:MenuController) {
    console.log('CreateProjectComponent');
  }

  ngOnInit() {
    this.getProjects();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  async createProject() {
    console.log('CreateProject click');
    const modal = await this.modalCtrl.create({
      component: CreateProjectModalComponent
    });
    modal.onDidDismiss()
      .then((modalData) => {
        console.log('onDidDismiss ', modalData);
        if (modalData !== null && modalData.data) {
          console.log('The result:', modalData.data);
          this.saveProject(modalData.data);
        }
      });
    return await modal.present();
  }

  saveProject(projectDetails) {
    const postData = {
      projectName: projectDetails.projectName,
      projectDescr: projectDetails.projectDescr,
      createdDateTime: new Date()
    };
    console.log('postData ', postData);
    this.apisService.createProject(postData).then(response => {
      console.log('createProject response', response);
    })
      .catch(error => {
        console.log('createProject error', error);
      });
  }

  getProjects() {
    this.apisService.getProjects().subscribe(data => {
      console.log('getProjects ', data);

      this.projects = data.map(e => {
        return {
          id: e.payload.doc.id,
          // isEdit: false,
          projectName: e.payload.doc.data()['projectName'],
          projectDescr: e.payload.doc.data()['projectDescr'],
          createdDateTime: e.payload.doc.data()['createdDateTime'],
        };
      })
      console.log(this.projects);
    })
  }

  deleteProject(projectId) {
    // const postData = {
    //   id: projectId
    // };
    console.log('deleteProject ', projectId);
    this.apisService.deleteProject(projectId).then(response => {
      console.log('deleteProject response ', response);
    })
      .catch(error => {
        console.log('createProject error', error);
      });
  }

  getProjectDetails(project) {
    this.globalService.setProject(project);
    let navigationExtras: NavigationExtras = {
      state: {
        projectDetails: project
      }
    };
    this.router.navigate(['projects/details'], navigationExtras);
  }

  toggleMenu() {
    console.log('toggle menu click');
    this.menuCtrl.toggle(); //Add this method to your button click function
  }

}
