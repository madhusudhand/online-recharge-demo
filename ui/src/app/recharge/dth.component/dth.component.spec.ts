/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DthComponent } from './dth.component';

describe('DthComponent', () => {
  let component: DthComponent;
  let fixture: ComponentFixture<DthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
