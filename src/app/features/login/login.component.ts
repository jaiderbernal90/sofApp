import { Component } from '@angular/core';
import { LayoutComponent } from '../../core/layout/layout.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LayoutComponent,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup<{
    email: FormControl;
    password: FormControl;
  }> ;

  constructor( private readonly fb:FormBuilder){
    this.form = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  public submitForm(): void {
    console.log('SEND -> ', this.form.value);
    
  }
}
