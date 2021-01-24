import { Question } from './question';

export interface Questionaire {
  title: string;
  questions: Array<Question>;
}
