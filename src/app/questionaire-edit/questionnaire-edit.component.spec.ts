import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireEditComponent } from './questionnaire-edit.component';

describe('QuestionaireEditComponent', () => {
  let component: QuestionnaireEditComponent;
  let fixture: ComponentFixture<QuestionnaireEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
