import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  http = inject(HttpClient);
  locationList: any[] = [];

  ngOnInit() {
    this.getLocationList();
  }

  getLocationList() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations').subscribe((res: any) => {
      this.locationList = res;
    })
  }
}
