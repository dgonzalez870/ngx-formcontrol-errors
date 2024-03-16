import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormcontrolErrorsComponent } from './ngx-formcontrol-errors.component';

describe('NgxFormcontrolErrorsComponent', () => {
  let component: NgxFormcontrolErrorsComponent;
  let fixture: ComponentFixture<NgxFormcontrolErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFormcontrolErrorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxFormcontrolErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
