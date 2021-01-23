import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireEditComponent } from './questionaire-edit.component';

describe('QuestionaireEditComponent', () => {
  let component: QuestionaireEditComponent;
  let fixture: ComponentFixture<QuestionaireEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaireEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
