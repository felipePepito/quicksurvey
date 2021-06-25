import { Injectable } from '@angular/core';
import {Questionnaire} from '../model/questionnaire';

import {of, Observable, BehaviorSubject} from 'rxjs';
import {uuid} from '../utilities/uuid';
import {QuestionnaireMockupService} from './questionnaire-mockup.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {


  // tslint:disable-next-line:variable-name
  private readonly _questionnaires = new BehaviorSubject<Questionnaire[]>([]);

  readonly questionnaires$ = this._questionnaires.asObservable();

  constructor(private mockupService: QuestionnaireMockupService) {
    mockupService.getQuestionnaires().subscribe(
      q => this._questionnaires.next(q)
    );
  }

  get questionnaires(): Questionnaire[] {
    return this._questionnaires.getValue();
  }

  set questionnaires(val) {
    this._questionnaires.next(val);
  }

  createQuestionnaire(): Questionnaire {
      const questionnaire: Questionnaire = {
        id: uuid(),
        createdAt: new Date(),
        title: '',
        questions: []
      };
      this.questionnaires.push(questionnaire);
      return questionnaire;

  }

  updateQuestionnaire(updatedQestionnaire: Questionnaire): void {
    const index = this.questionnaires.indexOf(this.questionnaires.find(q => q.id === updatedQestionnaire.id));
    this.questionnaires.splice(index, 1, updatedQestionnaire);
  }

  getQuestionnaire(id: string): Questionnaire {
    let questionnaire;
    this.questionnaires$.subscribe(
      questionnaires => questionnaire = questionnaires.find(q => q.id === id)
    );
    return questionnaire;
  }


}

