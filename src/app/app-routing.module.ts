import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'auth',  loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'projects',  loadChildren : () => import('./projects/projects.module').then(m => m.ProjectsModule), canActivate: [AuthGuard] },
 // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
