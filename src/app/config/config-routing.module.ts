import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ConfigComponent} from './config/config.component';

const configRoutes: Routes = [
  {
    path: 'config',
    component: ConfigComponent
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(configRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ConfigRoutingModule { }
