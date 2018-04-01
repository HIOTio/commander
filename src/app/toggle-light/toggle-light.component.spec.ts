import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLightComponent } from './toggle-light.component';

describe('ToggleLightComponent', () => {
  let component: ToggleLightComponent;
  let fixture: ComponentFixture<ToggleLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
