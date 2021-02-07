import { Component, OnInit } from '@angular/core';
import {Questionnaire} from '../interfaces/questionnaire';
import { QuestionnaireService } from '../services/questionnaire.service';
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
      this.questionnaires = questionnaireService.questionnaires;
  }

  ngOnInit(): void {

  }

  cardClasses(createdAt: Date): object {
    return {
      recent: (createdAt.getTime() - Date.now()) < 4.32e+8
    };
  }

}
