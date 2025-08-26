import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { searchBus } from '../../models/model';

@Component({
  selector: 'app-book-ticket',
  imports: [],
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {

  route = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  searchObj: searchBus = new searchBus();

  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.searchObj.fromLocationID = res.fromID;
      this.searchObj.toLocationID = res.toID;
      this.searchObj.date = res.date;
    });
  }

  backClick() {
    this.route.navigate(['/search-result', this.searchObj.fromLocationID, this.searchObj.toLocationID, this.searchObj.date]);
  }
}
