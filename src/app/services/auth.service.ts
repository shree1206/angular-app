import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupRequest } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  apiURL: string = "https://api.freeprojectapi.com/api/BusBooking/";

  constructor() { }

  addNewUser(data: any): Observable<SignupRequest> {
    return this.http.post<SignupRequest>(`${this.apiURL}AddNewUser`, data);
  }
}
