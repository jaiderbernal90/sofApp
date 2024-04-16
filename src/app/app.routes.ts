import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { UsersComponent } from './features/users/users.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ContactComponent } from './features/contact/contact.component';
import { ServicesComponent } from './features/services/services.component';
import { ReviewsComponent } from './features/reviews/reviews.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'usuarios',
    component: UsersComponent,
  },
  {
    path: 'servicios',
    component: ServicesComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
  {
    path: 'reseñas',
    component: ReviewsComponent,
  },
  { 
    path: 'iniciar-sesion',
    component: LoginComponent,
    // canActivate: [ loginGuard ],
  },
  {
    path: 'registro',
    component: RegisterComponent,
    // canActivate: [ loginGuard ],
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
];
