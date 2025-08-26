import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { searchBus } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EncryptionService } from '../../services/encryption.service';

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
  encryptionService = inject(EncryptionService);

  ngOnInit() {
    this.getLocationList();
  }

  getLocationList() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations').subscribe((res: any) => {
      this.locationList = res;
    })
  }

  searchBus() {
    const encryptedFromId = encodeURIComponent(this.encryptionService.encrypt(this.searchObj.fromLocationID));
    const encryptedToId = encodeURIComponent(this.encryptionService.encrypt(this.searchObj.toLocationID));
    const encryptedDate = encodeURIComponent(this.encryptionService.encrypt(this.searchObj.date));
    this.route.navigate(['/search-result', encryptedFromId, encryptedToId, encryptedDate]);
  }
}
