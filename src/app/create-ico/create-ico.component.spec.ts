import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIcoComponent } from './create-ico.component';

describe('CreateIcoComponent', () => {
  let component: CreateIcoComponent;
  let fixture: ComponentFixture<CreateIcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
