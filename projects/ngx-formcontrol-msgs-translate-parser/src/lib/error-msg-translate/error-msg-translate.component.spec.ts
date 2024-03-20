import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { ErrorMsgTranslateComponent } from './error-msg-translate.component';

describe('ErrorMsgTranslateComponent', () => {
  let component: ErrorMsgTranslateComponent;
  let fixture: ComponentFixture<ErrorMsgTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMsgTranslateComponent, TranslateModule.forRoot()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorMsgTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
