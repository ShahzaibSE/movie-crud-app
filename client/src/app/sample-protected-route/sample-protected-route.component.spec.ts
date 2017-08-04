import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProtectedRouteComponent } from './sample-protected-route.component';

describe('SampleProtectedRouteComponent', () => {
  let component: SampleProtectedRouteComponent;
  let fixture: ComponentFixture<SampleProtectedRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleProtectedRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleProtectedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
