import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { LayoutComponent } from '../../core/layout/layout.component';

export interface Service {
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CardComponent,
    LayoutComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
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
}
