import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterchildComponent } from './registerchild.component';

describe('RegisterchildComponent', () => {
  let component: RegisterchildComponent;
  let fixture: ComponentFixture<RegisterchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
