import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchBus, searchBus } from '../../models/model';
import { SearchBusService } from '../../services/search-bus.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-result',
  imports: [DatePipe],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  activatedRoute = inject(ActivatedRoute);
  searchService = inject(SearchBusService)
  searchObj: searchBus = new searchBus();
  searchData: ISearchBus[] = [];

  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.searchObj.fromLocationID = res.fromID,
        this.searchObj.toLocationID = res.toID,
        this.searchObj.date = res.date
      this.getSearchResult();
    })
  }

  getSearchResult() {
    this.searchService.searchBus(this.searchObj.fromLocationID, this.searchObj.toLocationID, this.searchObj.date).subscribe((res: any) => {
      this.searchData = res;
    })
  }
}
