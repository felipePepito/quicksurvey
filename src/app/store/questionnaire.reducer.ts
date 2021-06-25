import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Questionnaire} from '../model/questionnaire';
import {Action, createReducer} from '@ngrx/store';

export interface State extends EntityState<Questionnaire> {}

export const adapter : EntityAdapter<Questionnaire> = createEntityAdapter<Questionnaire>({
  sortComparer: false
});

export const initialState: State = adapter.getInitialState();

const questionnaireReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return questionnaireReducer(state, action);
}
