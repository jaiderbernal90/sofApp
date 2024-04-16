import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NzButtonModule, RouterLink, LowerCasePipe ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleIcon: boolean = false;
  hideMenu: boolean = false;
  menuList = [
    'Servicios',
    'Reseñas',
    'Contacto'
  ];

  constructor() { }
  ngOnInit(): void { }
  
  public openMenu(): void {
    this.hideMenu = !this.hideMenu;
    this.toggleIcon = !this.toggleIcon;
  }
}
