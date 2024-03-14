import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeContainerComponent } from './source-code-container.component';

describe('SourceCodeContainerComponent', () => {
  let component: SourceCodeContainerComponent;
  let fixture: ComponentFixture<SourceCodeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceCodeContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceCodeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
