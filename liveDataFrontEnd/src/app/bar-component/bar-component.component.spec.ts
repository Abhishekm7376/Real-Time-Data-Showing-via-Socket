import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponentComponent } from './bar-component.component';

describe('BarComponentComponent', () => {
  let component: BarComponentComponent;
  let fixture: ComponentFixture<BarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
