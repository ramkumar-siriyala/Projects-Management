import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateModuleModalComponent } from '../create-module-modal/create-module-modal.component';
import { ApisService } from 'src/app/_services/apis.service';
import { CreateSubModuleModalComponent } from '../create-sub-module-modal/create-sub-module-modal.component';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  modules: any;
  projectDetails: any;
  isAccOpen = false;
  subModules: any;
  selectedModuleIndex: number;

  constructor(private route: ActivatedRoute, private router: Router,
              public modalCtrl: ModalController,
              public apisService: ApisService, public globalService: GlobalService,
    ) {

    console.log('ProjectDetailsComponent ', this.globalService.getProject());


    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state.projectDetails);
        this.projectDetails = this.router.getCurrentNavigation().extras.state.projectDetails;
        this.getModules(this.projectDetails.id);
      }
    });



  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    if (!this.projectDetails) {
      // this.router.navigate(['projects']);
      // this.location.back();
    }
  }

  async createModule() {
    console.log('createModule click');
    const modal = await this.modalCtrl.create({
      component: CreateModuleModalComponent
    });
    modal.onDidDismiss()
      .then((modalData) => {
        console.log('onDidDismiss ', modalData);
        if (modalData !== null && modalData.data) {
          console.log('The result:', modalData.data);
          this.saveModule(modalData.data);
        }
      });
    return await modal.present();
  }


  saveModule(moduleDetails) {
    const postData = {
      moduleName: moduleDetails.moduleName,
      moduleDescr: moduleDetails.moduleDescr,
      createdDateTime: new Date()
    };
    console.log('postData ', postData);
    this.apisService.createModule(this.projectDetails.id, postData).then(response => {
      console.log('createModule response', response);
    })
      .catch(error => {
        console.log('createModule error', error);
      });
  }

  getModules(projectId) {
    this.apisService.getModules(projectId).subscribe(data => {
      console.log('getModules ', data);

      this.modules = data.map(e => {
        return {
          id: e.payload.doc.id,
          // isEdit: false,
          moduleName: e.payload.doc.data()['moduleName'],
          moduleDescr: e.payload.doc.data()['moduleDescr'],
          createdDateTime: e.payload.doc.data()['createdDateTime'],
        };
      })
      console.log(this.modules);
    })
  }

  /**
   * Allows the accordion state to be toggled (I.e. opened/closed)
   * @public
   * @method toggleAccordion
   * @returns {none}
   */
  public toggleAccordion(index, module): void {

    if (this.selectedModuleIndex === index) {
      this.isAccOpen = !this.isAccOpen;
    } else {
      this.isAccOpen = true;
      this.selectedModuleIndex = index;
    }
    if (this.isAccOpen) {
      this.getSubModules(this.projectDetails.id, module.id)
    }
  }

  async createSubModule(module) {
    console.log('createSubModule click');
    const modal = await this.modalCtrl.create({
      component: CreateSubModuleModalComponent
    });
    modal.onDidDismiss()
      .then((modalData) => {
        console.log('onDidDismiss ', modalData);
        if (modalData !== null && modalData.data) {
          console.log('The result:', modalData.data);
          this.saveSubModule(module.id, modalData.data);
        }
      });
    return await modal.present();

  }

  saveSubModule(moduleId, subModuleDetails) {
    const postData = {
      subModuleName: subModuleDetails.subModuleName,
      subModuleDescr: subModuleDetails.subModuleDescr,
      createdDateTime: new Date()
    };
    console.log('postData ', postData);
    this.apisService.createSubModule(this.projectDetails.id, moduleId, postData).then(response => {
      console.log('createSubModule response', response);
    })
      .catch(error => {
        console.log('createSubModule error', error);
      });
  }

  getSubModules(projectId, moduleId) {
    this.apisService.getSubModules(projectId, moduleId).subscribe(data => {
      console.log('getSubModules ', data);

      this.subModules = data.map(e => {
        return {
          id: e.payload.doc.id,
          // isEdit: false,
          subModuleName: e.payload.doc.data()['subModuleName'],
          subModuleDescr: e.payload.doc.data()['subModuleDescr'],
          createdDateTime: e.payload.doc.data()['createdDateTime'],
        };
      })
      console.log(this.subModules);
    })
  }



}
