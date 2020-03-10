import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMessengerComponent } from './group-messenger.component';

describe('GroupMessengerComponent', () => {
  let component: GroupMessengerComponent;
  let fixture: ComponentFixture<GroupMessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMessengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
