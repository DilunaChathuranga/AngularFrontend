import { BookmarkDetailsComponent } from './bookmark-details/bookmark-details.component';
import { UpdateBookmarkComponent } from './update-bookmark/update-bookmark.component';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'bookmarks', component: BookmarkListComponent },
  { path: 'add', component: CreateBookmarkComponent },
  { path: 'update/:id', component: UpdateBookmarkComponent },
  { path: 'details/:id', component: BookmarkDetailsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);