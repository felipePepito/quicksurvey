import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuestionnaireEditComponent} from './components/questionnaire-edit/questionnaire-edit.component';
import {QuestionEditComponent} from './components/question-edit/question-edit.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {EditQuestionnaireHttpService} from './services/edit-questionnaire-http.service';



@NgModule({
  declarations: [
    QuestionnaireEditComponent,
    QuestionEditComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    EditQuestionnaireHttpService
  ]
})
export class EditModule { }
