import { Component, DestroyRef, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

// custom validator
function mustContainAt(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }
  return { doesntContainAt: true };
}

function checkPassword(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password === confirmPassword) {
    return null;
  }

  return { passwordNotMatched: true };
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  destroyRef = inject(DestroyRef);
  ngOnInit() {
    const prevData = window.localStorage.getItem('login-form-data');

    if (prevData) {
      const loadedData = JSON.parse(prevData);
      this.form.patchValue({
        email: loadedData.email,
      });
    }

    const subsrciption = this.form.valueChanges
      .pipe(debounceTime(2000))
      .subscribe({
        next: (val) => {
          window.localStorage.setItem(
            'login-form-data',
            JSON.stringify({ email: val.email })
          );
        },
      });

    this.destroyRef.onDestroy(() => {
      subsrciption?.unsubscribe();
    });
  }

  get isEmailInvalid() {
    return this.form.controls.email.touched && this.form.controls.email.invalid;
  }
  onSubmit() {
    console.log(this.form.value.email);
  }
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required, mustContainAt],
    }),
    password: new FormControl(''),
  });
}
