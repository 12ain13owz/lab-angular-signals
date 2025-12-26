import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InputTextForm } from './input-text-form'

describe('InputTextForm', () => {
  let component: InputTextForm
  let fixture: ComponentFixture<InputTextForm>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextForm],
    }).compileComponents()

    fixture = TestBed.createComponent(InputTextForm)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
