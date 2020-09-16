import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactitemComponent } from './contactitem.component';

describe('ContactitemComponent', () => {
  let component: ContactitemComponent;
  let fixture: ComponentFixture<ContactitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
