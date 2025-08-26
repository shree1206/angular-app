import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { searchBus } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  http = inject(HttpClient);
  route = inject(Router);
  locationList: any[] = [];
  searchObj: searchBus = new searchBus();

  ngOnInit() {
    this.getLocationList();
  }

  getLocationList() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations').subscribe((res: any) => {
      this.locationList = res;
    })
  }

  searchBus() {
    this.route.navigate(['/search-result', this.searchObj.fromLocationID, this.searchObj.toLocationID, this.searchObj.date]);
  }
}
