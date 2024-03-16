import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import {
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

import { AppComponent } from './app.component';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: any = {
  TITLE: 'Mocked Title',
  APP_DESCRIPTION: 'Mocked Description',
};

class MockTranslateLoader extends TranslateLoader {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  override getTranslation(lang: string): Observable<any> {
    return translations;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  get(lang: string): any {
    return translations;
  }
}
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: MockTranslateLoader,
          },
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ngx-translate-demo-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngx-translate-demo-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'ngx-translate-demo-app'
    );
  });
});
