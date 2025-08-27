import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "search",
        pathMatch: "full"
    },
    {
        path: 'search',
        loadComponent: () => import('./pages/search/search.component').then(m => m.SearchComponent)
    },
    {
        path: 'search-result/:fromID/:toID/:date',
        loadComponent: () => import('./pages/search-result/search-result.component').then(m => m.SearchResultComponent)
    },
    {
        path: 'book-ticket/:fromID/:toID/:date/:scheduleID',
        loadComponent: () => import('./pages/book-ticket/book-ticket.component').then(m => m.BookTicketComponent)
    },
    {
        path: 'my-booking',
        loadComponent: () => import('./pages/my-bookings/my-bookings.component').then(m => m.MyBookingsComponent)
    },
    {
        path: 'signup',
        loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: "**",
        loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    }
];
