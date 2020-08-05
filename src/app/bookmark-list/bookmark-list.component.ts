import { routing } from './../app.routing';
import { BookmarkService } from './../bookmark.service';
import { Bookmark } from './../bookmark';
import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  bookmarks: Observable<Bookmark[]>;
  
  constructor(private bookmarkService:BookmarkService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.bookmarks = this.bookmarkService.getBokmarksList();
    console.log(this.bookmarks);
  }

  deleteBookmark(id: number) {
    
    this.bookmarkService.deleteBookmark(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  bookmarkDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateBookmark(id: number){
    this.router.navigate(['update', id]);
  }
}
