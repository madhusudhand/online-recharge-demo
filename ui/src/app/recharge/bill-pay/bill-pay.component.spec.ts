/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BillPayComponent } from './bill-pay.component';

describe('BillPayComponent', () => {
  let component: BillPayComponent;
  let fixture: ComponentFixture<BillPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
