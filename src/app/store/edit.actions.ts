import {createAction, props} from '@ngrx/store';
import {Answer} from '../model/answer';
import {Question} from '../model/question';
import {Questionnaire} from '../model/questionnaire';


export const createQuestion = createAction(
  '[Questionnaire Edit Component] Create Question',
  props<{Question, idQuestionnaire}>()
)
export const updateQuestion = createAction(
  '[Question Edit Component] Update Question',
  props<{Question}>()
)
export const deleteQuestion = createAction(
  '[Questionnaire Edit Component] Delete Question',
  props<{Question, idQuestionnaire}>()
)

export const createQuestionnaire = createAction(
  '[Dashboard Component] Create Questionnaire',
  props<Questionnaire>()
)
export const updateQuestionnaire = createAction(
  '[Questionnaire Edit Component] Update Questionnaire',
  props<Questionnaire>()
)
