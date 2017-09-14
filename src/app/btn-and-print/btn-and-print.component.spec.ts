import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAndPrintComponent } from './btn-and-print.component';

describe('BtnAndPrintComponent', () => {
  let component: BtnAndPrintComponent;
  let fixture: ComponentFixture<BtnAndPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnAndPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAndPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
