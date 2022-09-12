import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateworkerComponent } from './createworker.component';

describe('CreateworkerComponent', () => {
  let component: CreateworkerComponent;
  let fixture: ComponentFixture<CreateworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateworkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
