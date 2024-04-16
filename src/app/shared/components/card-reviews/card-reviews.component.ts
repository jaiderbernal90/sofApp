import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-reviews',
  standalone: true,
  imports: [],
  templateUrl: './card-reviews.component.html',
  styleUrl: './card-reviews.component.scss'
})
export class CardReviewsComponent {

  @Input() img: string = '';
  @Input() fullName: string = '';
  @Input() role: string = '';
  @Input() review: string = '';
}
