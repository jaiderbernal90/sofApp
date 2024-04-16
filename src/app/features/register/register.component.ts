import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LayoutComponent } from '../../core/layout/layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    LayoutComponent,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form: FormGroup<{
    email: FormControl;
    password: FormControl;
    name: FormControl;
  }> ;

  constructor( private readonly fb:FormBuilder){
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  public submitForm(): void {
    console.log('SEND -> ', this.form.value);
    
  }
}
