import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question } from '../../../interfaces/question';
import {Answer} from '../../../interfaces/answer';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})

export class QuestionEditComponent implements OnInit {

  @Input() question: Question;
  @Input() questionIsNew: boolean;
  answerToAdd: Answer = {
    text: '',
    chosen: false
  };



  @Output() doneEditingEmitter = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addAnswer(): void {
    this.question.answers.push(
      this.answerToAdd
    );
    this.answerToAdd = {
      text: '',
      chosen: false
    };
  }

  deleteAnswer(answer: Answer): void {
    const i = this.question.answers.indexOf(answer);
    this.question.answers.splice(i, 1);
  }

  doneEditing(): void {
    this.doneEditingEmitter.emit(true);
  }

}
