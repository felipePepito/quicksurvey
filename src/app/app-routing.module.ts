import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionnaireEditComponent } from './questionaire-edit/questionnaire-edit.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'questionnaire-edit/:id', component: QuestionnaireEditComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
