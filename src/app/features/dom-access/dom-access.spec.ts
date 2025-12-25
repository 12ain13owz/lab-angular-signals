import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomAccess } from './dom-access';

describe('DomAccess', () => {
  let component: DomAccess;
  let fixture: ComponentFixture<DomAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
