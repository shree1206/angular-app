import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IScheduleData } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SearchBusService {

  constructor() { }
  apiURL: string = "https://api.freeprojectapi.com/api/BusBooking/";

  http = inject(HttpClient);

  searchBus(fromID: string, toID: string, date: string) {
    return this.http.get(this.apiURL + "searchBus2?fromLocation=" + fromID + "&toLocation=" + toID + "&travelDate=" + date + "")
  }

  getBusScheduleByID(scheduleID: number): Observable<IScheduleData> {
    return this.http.get<IScheduleData>(`${this.apiURL}GetBusScheduleById?id=${scheduleID}`);
  }
}
