import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollListItemComponent } from './scroll-list-item.component';

describe('ScrollListItemComponent', () => {
  let component: ScrollListItemComponent;
  let fixture: ComponentFixture<ScrollListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
