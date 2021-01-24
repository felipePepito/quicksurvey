import {Questionaire} from '../interfaces/questionaire';
import {Question} from '../interfaces/question';
import {Answer} from '../interfaces/answer';
import {cloneDeep} from 'lodash';

const answers: Array<Answer> = [
  {
    text: 'Answer 1',
    chosen: false
  },
  {
    text: 'Answer 2',
    chosen: false
  }
];
const answers1 = cloneDeep(answers);
const answers2 = cloneDeep(answers);


export const questionaire: Questionaire = {
  title: 'My first questionaire',
  questions:  [
    {
      text: 'Question 1',
      answers: answers1
    },
    {
      text: 'Question 2',
      answers: answers2
    }
  ]
};
