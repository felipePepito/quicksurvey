import { TestBed } from '@angular/core/testing';

import { QuestionnaireMockupService } from './questionnaire-mockup.service';

describe('QuestionnaireMockupService', () => {
  let service: QuestionnaireMockupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireMockupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
