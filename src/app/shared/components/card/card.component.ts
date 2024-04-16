import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ NzButtonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
   @Input() img: string = "";
   @Input() title: string = "";
   @Input() description: string = "";
}
