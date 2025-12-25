import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLab } from './forms-lab';

describe('FormsLab', () => {
  let component: FormsLab;
  let fixture: ComponentFixture<FormsLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsLab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
