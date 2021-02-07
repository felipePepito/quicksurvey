import { Injectable } from '@angular/core';
import {Questionnaires} from '../mockup/mock-questionaire';
import {Observable, of} from 'rxjs';
import {Questionnaire} from '../interfaces/questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireMockupService {

  constructor() { }

  getQuestionnaires(): Observable<Questionnaire[]> {
    return of(Questionnaires);
  }
}
