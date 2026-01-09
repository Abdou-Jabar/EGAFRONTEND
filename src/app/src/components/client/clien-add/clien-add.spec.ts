import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienAdd } from './clien-add';

describe('ClienAdd', () => {
  let component: ClienAdd;
  let fixture: ComponentFixture<ClienAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
