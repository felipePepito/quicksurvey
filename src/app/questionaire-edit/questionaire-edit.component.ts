import { Component, OnInit } from '@angular/core';
import { Questionaire } from '../interfaces/questionaire';
import { questionaire } from '../mockup/mock-questionaire';
import { Question } from '../interfaces/question';

@Component({
  selector: 'app-questionaire-edit',
  templateUrl: './questionaire-edit.component.html',
  styleUrls: ['./questionaire-edit.component.css']
})
export class QuestionaireEditComponent implements OnInit {

  questionaire: Questionaire;
  questionToEdit: Question;

  constructor() {
    this.questionaire = {
      title: '',
      questions: []
    };
  }

  ngOnInit(): void {
  }

  addQuestion(): void {
    this.questionToEdit = {
      text: '',
      answers: []
    };
    this.questionaire.questions.push(this.questionToEdit);
  }

  editQuestion(question: Question): void {
    this.questionToEdit = question;
  }

  deleteQuestion(question: Question): void {
    const i = this.questionaire.questions.indexOf(question);
    this.questionaire.questions.splice(i, 1);
  }

  doneEditing(): void {
    this.questionToEdit = undefined;
  }
}
