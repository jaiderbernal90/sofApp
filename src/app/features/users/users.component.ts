import { Component } from '@angular/core';
import { LayoutComponent } from '../../core/layout/layout.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    LayoutComponent,
    NzTableModule,
    NzDividerModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  listOfData: any[] = [
    {
      key: '1',
      name: 'John Brown',
      role: "Visualizador",
      email: 'jh.bronw@bmgial.com'
    },
    {
      key: '2',
      name: 'Jim Green',
      role: "Administrador",
      email: 'jim.g@emial.com'
    },
    {
      key: '3',
      name: 'Joe Black',
      role: "Administrador",
      email: 'joe.blac@bmail.com'
    }
  ];

}
