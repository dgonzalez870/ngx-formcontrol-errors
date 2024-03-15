import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTranslateMsgParserComponent } from './ngx-translate-msg-parser.component';

describe('NgxTranslateMsgParserComponent', () => {
  let component: NgxTranslateMsgParserComponent;
  let fixture: ComponentFixture<NgxTranslateMsgParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTranslateMsgParserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxTranslateMsgParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
