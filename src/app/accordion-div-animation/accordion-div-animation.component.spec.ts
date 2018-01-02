import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDivAnimationComponent } from './accordion-div-animation.component';

describe('AccordionDivAnimationComponent', () => {
  let component: AccordionDivAnimationComponent;
  let fixture: ComponentFixture<AccordionDivAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionDivAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDivAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
