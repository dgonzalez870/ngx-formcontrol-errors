import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeSectionComponent } from './source-code-section.component';

describe('SourceCodeSectionComponent', () => {
  let component: SourceCodeSectionComponent;
  let fixture: ComponentFixture<SourceCodeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceCodeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceCodeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
