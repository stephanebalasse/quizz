import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizzComponent} from './quizz/quizz.component';
import {QuizzRoutingModule} from './quizz-routing.module';
import {MaterialModule} from '../material/material.module';
import { ChoicesComponent } from './choices/choices.component';
import { ChoiceComponent } from './choice/choice.component';
import { HeaderComponent } from './header/header.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
  imports: [
    CommonModule,
    QuizzRoutingModule,
    MaterialModule
  ],
  declarations: [QuizzComponent, ChoicesComponent, ChoiceComponent, HeaderComponent, PlayersComponent]
})
export class QuizzModule {
}
