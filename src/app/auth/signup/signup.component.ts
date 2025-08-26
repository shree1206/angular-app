import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignupRequest } from '../../models/model';

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
          console.log('User registered successfully');
        },
        error: (err: any) => {
          console.error('Registration error:', err);
        }
      });
    }
  }
}
