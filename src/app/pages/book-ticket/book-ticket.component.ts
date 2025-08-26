import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IScheduleData, searchBus } from '../../models/model';
import { SearchBusService } from '../../services/search-bus.service';
import { DatePipe } from '@angular/common';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-book-ticket',
  imports: [DatePipe, LoaderComponent],
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {

  route = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  searchService = inject(SearchBusService)
  searchObj: searchBus = new searchBus();
  getBusScheduleByID: any;
  scheduleData!: IScheduleData;
  isLoading: boolean = true;
  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.searchObj.fromLocationID = res.fromID;
      this.searchObj.toLocationID = res.toID;
      this.searchObj.date = res.date;
      this.getBusDetails(res.scheduleID);
    });
  }

  backClick() {
    this.route.navigate(['/search-result', this.searchObj.fromLocationID, this.searchObj.toLocationID, this.searchObj.date]);
  }

  getBusDetails(scheduleID: number) {
    this.searchService.getBusScheduleByID(scheduleID).subscribe((res: IScheduleData) => {
      if (res) {
        this.scheduleData = res;
        this.isLoading = false;
      }
    });
  }
}
