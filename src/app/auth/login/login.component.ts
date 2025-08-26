import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  authService = inject(AuthService);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.loginUser(credentials).subscribe({
        next: (response: any) => {
          if (response.data != null) {
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'You are now logged in!',
              confirmButtonColor: '#3085d6'
            });
            this.loginForm.reset();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: 'Invalid username or password',
              confirmButtonColor: '#d33'
            });
          }
        }
      });
    }
  }
}
