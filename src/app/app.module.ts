import { AppRoutingModule } from './app-routing.module';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { BookmarkDetailsComponent } from './bookmark-details/bookmark-details.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { UpdateBookmarkComponent } from './update-bookmark/update-bookmark.component';
import { FormsModule } from '@angular/forms';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
       // routing,
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ToastrModule.forRoot()
        //AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UpdateBookmarkComponent,
        BookmarkListComponent,
        BookmarkDetailsComponent,
        CreateBookmarkComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }