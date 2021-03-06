import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../interfaces/questionnaire';
import { Question } from '../interfaces/question';
import {ActivatedRoute, Router} from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'app-questionaire-edit',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.css']
})
export class QuestionnaireEditComponent implements OnInit {

  questionnaire: Questionnaire;
  questionToEdit: Question;
  questionIsNew: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private questionnaireService: QuestionnaireService) {

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idQuestionnaire = routeParams.get('id');
    this.questionnaire = this.questionnaireService.getQuestionnaire(idQuestionnaire);
  }

  addQuestion(): void {
    this.questionToEdit = {
      text: '',
      answers: []
    };
    this.questionIsNew = true;
    this.questionnaire.questions.push(this.questionToEdit);
  }

  editQuestion(question: Question): void {
    this.questionToEdit = question;
    this.questionIsNew = false;
  }

  deleteQuestion(question: Question): void {
    const i = this.questionnaire.questions.indexOf(question);
    this.questionnaire.questions.splice(i, 1);
  }

  doneEditingAnswer(): void {
    this.questionToEdit = undefined;
  }

  doneEditingQuestionnaire(): void {
    this.questionnaireService.updateQuestionnaire(this.questionnaire);
    this.router.navigate(['']);
  }

}
