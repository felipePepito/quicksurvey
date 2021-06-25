import { TestBed } from '@angular/core/testing';

import { EditQuestionnaireHttpService } from './edit-questionnaire-http.service';

describe('EditQuestionnaireHttpService', () => {
  let service: EditQuestionnaireHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditQuestionnaireHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
