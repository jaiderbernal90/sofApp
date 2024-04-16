import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../core/layout/layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { CardComponent } from '../../shared/components/card/card.component';
import { CardReviewsComponent } from '../../shared/components/card-reviews/card-reviews.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';


export interface Review {
  fullname: string;
  role: string;
  review: string;
  img: string;
}

export interface Service {
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LayoutComponent, 
    NzButtonModule, 
    NzCardModule, 
    NzAvatarModule, 
    CardComponent, 
    CardReviewsComponent, 
    ReactiveFormsModule, 
    NzFormModule, 
    NzFormControlComponent,
    NzInputModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

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
    }
  ];

  services: Service[] = [
    {
      title: 'Software a la medida',
      description: 'Creación de soluciones de software personalizadas para satisfacer las necesidades específicas de los clientes. Esto puede implicar el desarrollo de sistemas de gestión empresarial (ERP), soluciones de CRM, software de automatización de procesos, entre otros.',
      img: '../assets/img/card_img.png'
    },
    {
      title: 'Mantenimiento y Soporte',
      description: 'Proporcionar servicios de mantenimiento continuo y soporte técnico para asegurar el funcionamiento óptimo de los sistemas de software existentes, así como la corrección de errores y la implementación de actualizaciones.',
      img: '../assets/img/card_img.png'
    },
    {
      title: 'Desarrollo de Aplicaciones Web',
      description: 'Creación de aplicaciones accesibles a través de navegadores web. Esto puede incluir aplicaciones empresariales, portales de clientes, plataformas de comercio electrónico, sistemas de gestión de contenido (CMS), entre otros.',
      img: '../assets/img/card_img.png'
    }
  ]

  form: FormGroup<{
    name: FormControl;
    email: FormControl;
    phone: FormControl;
    comment: FormControl;
  }> ;

  constructor( private readonly fb:FormBuilder){
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      phone: [null, [Validators.required]],
      comment: [null, [Validators.required]]
    });
  }

  ngOnInit(): void { }

  public submitForm(): void {
    console.log('SEND -> ', this.form.value);
    
  }
}
