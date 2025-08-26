import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { BookTicketComponent } from './pages/book-ticket/book-ticket.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';


export const routes: Routes = [
    {
        path: "",
        redirectTo: "search",
        pathMatch: "full"
    },
    { path: "search", component: SearchComponent },
    { path: "search-result/:fromID/:toID/:date", component: SearchResultComponent },
    { path: "book-ticket/:fromID/:toID/:date/:scheduleID", component: BookTicketComponent },
    { path: "my-booking", component: MyBookingsComponent },
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "**", component: PageNotFoundComponent }
];
