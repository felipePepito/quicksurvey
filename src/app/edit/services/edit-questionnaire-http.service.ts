import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Questionnaire} from '../../model/questionnaire';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditQuestionnaireHttpService {

  constructor(private httpClient: HttpClient) { }

  getQuestionnaires(): Observable<Questionnaire[]> {
    return this.httpClient.get<Questionnaire[]>(
      environment.apiEndpoint + 'edit/',
      {
        responseType: 'json',
        observe: 'body'
      }
    )

  }
}
