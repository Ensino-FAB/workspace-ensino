import { RouterTestingModule } from '@angular/router/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  BreadcrumbModule,
  ButtonModule,
  IconModule,
} from '@cca-fab/cca-fab-components-common';

import { SubNavComponent } from './sub-nav.component';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  template: `<p>Test One Component</p>`,
})
class TestOneComponent {}

@Component({
  template: `<p>Test Two Component</p>`,
})
class TestTwoComponent {}

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Test',
    },
    children: [
      {
        path: 'test-one',
        data: {
          breadcrumb: 'Test One',
        },
        component: TestOneComponent,
      },
      {
        path: 'test-two',
        data: {
          breadcrumb: 'Test Two',
        },
        component: TestTwoComponent,
      },
    ],
  },
];

describe('SubNavComponent', () => {
  let component: SubNavComponent;
  let fixture: ComponentFixture<SubNavComponent>;

  let location: Location;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubNavComponent, TestOneComponent, TestTwoComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        ButtonModule,
        IconModule,
        BreadcrumbModule,
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    activatedRoute = TestBed.inject(ActivatedRoute);
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubNavComponent);
    component = fixture.componentInstance;

    component.router = router;
    component.activatedRoute = activatedRoute;

    fixture.detectChanges();

    fixture.ngZone.run(() => {
      router.initialNavigation();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create breadcrumb', fakeAsync(() => {
    const handleBreadCrumbsSpy = jest.spyOn(component, 'handleBreadCrumbs');

    fixture.ngZone.run(() => {
      router.navigate(['/test-one']);
    });

    tick();

    expect(location.path()).toBe('/test-one');
    expect(handleBreadCrumbsSpy).toHaveBeenCalledTimes(3);
    expect(component.menuItems).toStrictEqual([
      { label: 'Test', url: '' },
      { label: 'Test One', url: '/test-one' },
    ]);
  }));
});
