import { Component, OnInit } from '@angular/core';
import {Questionnaire} from '../../../model/questionnaire';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  questionnaires: Array<Questionnaire>;
  now = new Date();

  constructor(private questionnaireService: QuestionnaireService) {

  }

  ngOnInit(): void {
    this.questionnaires = this.questionnaireService.questionnaires;
  }

  cardClasses(createdAt: Date): object {
    return {
      recent: (createdAt.getTime() - Date.now()) < 4.32e+8
    };
  }

  createQuestionnaire(): void {
    // store.dispatch()
  }

}
