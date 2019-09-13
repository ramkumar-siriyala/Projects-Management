import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { IonicModule } from '@ionic/angular';
import { CreateProjectModalComponent } from './create-project-modal/create-project-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApisService } from '../_services/apis.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CreateModuleModalComponent } from './create-module-modal/create-module-modal.component';
import { CreateSubModuleModalComponent } from './create-sub-module-modal/create-sub-module-modal.component';

@NgModule({
  declarations: [CreateProjectComponent,
    CreateProjectModalComponent,
    CreateModuleModalComponent,
    CreateSubModuleModalComponent,
    ProjectDetailsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectsRoutingModule,
    AngularFireDatabaseModule
  ],
  entryComponents: [CreateProjectModalComponent, CreateModuleModalComponent,CreateSubModuleModalComponent],
  providers: [ApisService]
})
export class ProjectsModule { }
