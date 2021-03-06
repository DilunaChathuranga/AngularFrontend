import { AuthGuard } from './_guards/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkDetailsComponent } from './bookmark-details/bookmark-details.component';
import { UpdateBookmarkComponent } from './update-bookmark/update-bookmark.component';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'bookmarks', component: BookmarkListComponent },
  { path: 'add', component: CreateBookmarkComponent },
  { path: 'update/:id', component: UpdateBookmarkComponent },
  { path: 'details/:id', component: BookmarkDetailsComponent },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
