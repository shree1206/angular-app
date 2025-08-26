import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ISearchBus, searchBus } from '../../models/model';
import { SearchBusService } from '../../services/search-bus.service';
import { DatePipe } from '@angular/common';
import { EncryptionService } from '../../services/encryption.service';

@Component({
  selector: 'app-search-result',
  imports: [DatePipe, RouterLink],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  activatedRoute = inject(ActivatedRoute);
  searchService = inject(SearchBusService)
  encryptionService = inject(EncryptionService);
  route = inject(Router);
  searchObj: searchBus = new searchBus();
  searchData: ISearchBus[] = [];

  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.searchObj.fromLocationID = this.encryptionService.decrypt(decodeURIComponent(res.fromID));
      this.searchObj.toLocationID = this.encryptionService.decrypt(decodeURIComponent(res.toID));
      this.searchObj.date = this.encryptionService.decrypt(decodeURIComponent(res.date));
      this.getSearchResult();
    })
  }

  getSearchResult() {
    this.searchService.searchBus(this.searchObj.fromLocationID, this.searchObj.toLocationID, this.searchObj.date).subscribe((res: any) => {
      this.searchData = res;
    })
  }

  navigatingToBooking(scheduleId: any) {
    const encryptedFromId = encodeURIComponent(this.encryptionService.encrypt(this.searchObj.fromLocationID));
    const encryptedToId = encodeURIComponent(this.encryptionService.encrypt(this.searchObj.toLocationID));
    const encryptedDate = encodeURIComponent(this.encryptionService.encrypt(this.searchObj.date));
    this.route.navigate(['/book-ticket', encryptedFromId, encryptedToId, encryptedDate, scheduleId]);
  }
}
