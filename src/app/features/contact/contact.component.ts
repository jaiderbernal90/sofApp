import { Component } from '@angular/core';
import { LayoutComponent } from '../../core/layout/layout.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    LayoutComponent,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  
  form: FormGroup<{
    name: FormControl;
    email: FormControl;
    phone: FormControl;
    comment: FormControl;
  }>;

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
