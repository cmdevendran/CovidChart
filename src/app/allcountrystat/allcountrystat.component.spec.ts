import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcountrystatComponent } from './allcountrystat.component';

describe('AllcountrystatComponent', () => {
  let component: AllcountrystatComponent;
  let fixture: ComponentFixture<AllcountrystatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcountrystatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcountrystatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
