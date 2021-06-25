import * as EditActions from './edit.actions';
import {Questionnaire} from '../model/questionnaire';
import {createReducer, on} from '@ngrx/store';
import produce from 'immer';

export interface State {
  questionnaires: Questionnaire[]
}

export const initialState: State = {
  questionnaires: []
}

function createQuestionnaireReducer(state, questionnaire) {
  produce(state, draftstate => {
    draftstate.push(questionnaire);
  })
}
// const editReducer = createReducer(
//   initialState,
//   on(EditActions.createQuestionnaire, state =>)
// )
