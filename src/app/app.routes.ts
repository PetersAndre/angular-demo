import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { BookmarksPageComponent } from './pages/bookmarks/bookmarks-page.component';
import { ReviewPageComponent } from './pages/reviews/review-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Angular Mastodon Demo' },
  { path: 'bookmarks', component: BookmarksPageComponent, title: 'Bookmarks' },
  { path: 'about', component: AboutPageComponent, title: 'About' },
  { path: 'reviews', component: ReviewPageComponent, title: 'Reviews}' },
];
