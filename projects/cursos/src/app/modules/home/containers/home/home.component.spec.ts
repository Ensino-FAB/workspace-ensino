import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule, IconModule } from '@cca-fab/cca-fab-components-common';
import { NoDashboardYetModule } from '../../../../../../../../projects/ensino-commons/src/lib/components/no-dashboard-yet/no-dashboard-yet.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [IconModule, CardModule, NoDashboardYetModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
