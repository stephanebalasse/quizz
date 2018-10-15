import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/quizz',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: environment.showRouting
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
