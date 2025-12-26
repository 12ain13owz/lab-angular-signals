import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InputNumberForm } from './input-number-form'

describe('InputNumberForm', () => {
  let component: InputNumberForm
  let fixture: ComponentFixture<InputNumberForm>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNumberForm],
    }).compileComponents()

    fixture = TestBed.createComponent(InputNumberForm)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
