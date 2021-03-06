import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionnaireEditComponent } from './edit/components/questionnaire-edit/questionnaire-edit.component';
import { DashboardComponent} from './edit/components/dashboard/dashboard.component';
import { LoginComponent} from './login/components/login/login.component';

const routes: Routes = [
  { path: 'edit/:id', component: QuestionnaireEditComponent },
  { path: 'login', component: LoginComponent },
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
