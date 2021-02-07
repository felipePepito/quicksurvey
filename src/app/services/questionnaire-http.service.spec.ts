import { TestBed } from '@angular/core/testing';

import { QuestionnaireHttpService } from './questionnaire-http.service';

describe('QuestionnaireHttpService', () => {
  let service: QuestionnaireHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
