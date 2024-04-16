import { Component } from '@angular/core';
import { LayoutComponent } from '../../core/layout/layout.component';
import { CardReviewsComponent } from '../../shared/components/card-reviews/card-reviews.component';

export interface Review {
  fullname: string;
  role: string;
  review: string;
  img: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    LayoutComponent,
    CardReviewsComponent
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  reviews: Review[] = [
    {
      fullname: 'Pepe Ruiz',
      role: 'CEO',
      review: '“Increíble experiencia trabajando con este equipo de desarrollo de software. Su profesionalismo y atención al detalle superaron mis expectativas...”.',
      img: '../assets/img/card_img.png'
    },
    {
      fullname: 'Juan Perez',
      role: 'CEO',
      review: '“Su enfoque centrado en el cliente y su capacidad para entender nuestras necesidades específicas fueron impresionantes...”.',
      img: '../assets/img/card_img.png'
    },
    {
      fullname: 'Carlos Villamil',
      role: 'CEO',
      review: '“¡Simplemente asombroso! Este equipo de desarrollo de software logró lo que otros consideraban imposible. Su experiencia técnica combinada con una comunicación...”.',
      img: '../assets/img/card_img.png'
    },
    {
      fullname: 'Carlos Villamil',
      role: 'CEO',
      review: '“¡Simplemente asombroso! Este equipo de desarrollo de software logró lo que otros consideraban imposible. Su experiencia técnica combinada con una comunicación...”.',
      img: '../assets/img/card_img.png'
    },
    {
      fullname: 'Pepe Ruiz',
      role: 'CEO',
      review: '“Increíble experiencia trabajando con este equipo de desarrollo de software. Su profesionalismo y atención al detalle superaron mis expectativas...”.',
      img: '../assets/img/card_img.png'
    },
    {
      fullname: 'Juan Perez',
      role: 'CEO',
      review: '“Su enfoque centrado en el cliente y su capacidad para entender nuestras necesidades específicas fueron impresionantes...”.',
      img: '../assets/img/card_img.png'
    },
  ];

}
