import { NavModule } from './../../../ensino-commons/src/lib/components/nav/nav.module';
import { SubNavModule } from './../../../ensino-commons/src/lib/components/sub-nav/sub-nav.module';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ButtonModule,
  DropmenuModule,
  IconModule,
} from '@cca-fab/cca-fab-components-common';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SubNavModule,
        NavModule,
        DropmenuModule,
        IconModule,
        ButtonModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
