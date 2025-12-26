import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InputPhoneForm } from './input-phone-form'

describe('InputPhoneForm', () => {
  let component: InputPhoneForm
  let fixture: ComponentFixture<InputPhoneForm>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPhoneForm],
    }).compileComponents()

    fixture = TestBed.createComponent(InputPhoneForm)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
