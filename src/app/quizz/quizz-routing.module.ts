import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizzComponent} from './quizz/quizz.component';
import {RouterModule, Routes} from '@angular/router';

const quizzRoutes: Routes = [
  {
    path: 'quizz',
    component: QuizzComponent
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(quizzRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class QuizzRoutingModule { }
