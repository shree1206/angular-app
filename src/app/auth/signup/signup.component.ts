import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignupRequest } from '../../models/model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup;
  authService = inject(AuthService);
  SignupRequest: SignupRequest = new SignupRequest();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.SignupRequest.userName = this.signupForm.value.userName;
      this.SignupRequest.emailId = this.signupForm.value.emailId
      this.SignupRequest.fullName = this.signupForm.value.fullName
      this.SignupRequest.password = this.signupForm.value.password

      this.authService.addNewUser(this.SignupRequest).subscribe({
        next: (res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'User Registered!',
            text: 'The user has been successfully created.',
            confirmButtonColor: '#3085d6'
          });

          this.signupForm.reset();
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.',
            confirmButtonColor: '#d33'
          });
        }
      });
    }
  }
}
