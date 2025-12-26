import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InputDateForm } from './input-date-form'

describe('InputDateForm', () => {
  let component: InputDateForm
  let fixture: ComponentFixture<InputDateForm>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDateForm],
    }).compileComponents()

    fixture = TestBed.createComponent(InputDateForm)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
