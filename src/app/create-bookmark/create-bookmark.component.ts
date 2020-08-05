import { BookmarkService } from './../bookmark.service';
import { Bookmark } from './../bookmark';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.css']
})
export class CreateBookmarkComponent implements OnInit {

  bookmark: Bookmark = new Bookmark();
  submitted = false;
  constructor(private bookmarkService: BookmarkService, private router: Router) { }

  ngOnInit(): void {
  }

  newBookmark(): void {
    this.submitted = false;
    this.bookmark = new Bookmark();
  }

  save() {
    this.bookmarkService.createBookmark(this.bookmark)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bookmark = new Bookmark();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/bookmarks']);
  }

}
