import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const projectsRoutes = [
  // { path: '', redirectTo: 'login' },
  { path: '', component: CreateProjectComponent },
  { path: 'create', component: CreateProjectComponent },
  { path: 'details', component: ProjectDetailsComponent },
];

// const projectsRoutes = [{
//   path: '', component: CreateProjectComponent, children: [
//    { path: '', component: CreateProjectComponent },
//    { path: 'create', component: CreateProjectComponent},
//    { path: 'details', component: ProjectDetailsComponent }]
// }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
