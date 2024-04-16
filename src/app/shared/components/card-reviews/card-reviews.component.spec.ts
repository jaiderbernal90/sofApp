import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReviewsComponent } from './card-reviews.component';

describe('CardReviewsComponent', () => {
  let component: CardReviewsComponent;
  let fixture: ComponentFixture<CardReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
