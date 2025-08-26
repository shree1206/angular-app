import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBusService {

  constructor() { }
  http = inject(HttpClient);

  searchBus(fromID: string, toID: string, date: string) {
    return this.http.get("https://api.freeprojectapi.com/api/BusBooking/searchBus2?fromLocation=" + fromID + "&toLocation=" + toID + "&travelDate=" + date + "")
  }
}
