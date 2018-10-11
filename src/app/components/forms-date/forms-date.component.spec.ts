import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDateComponent } from './forms-date.component';

describe('FormsDateComponent', () => {
  let component: FormsDateComponent;
  let fixture: ComponentFixture<FormsDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
