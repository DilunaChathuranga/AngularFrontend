import { Bookmark } from './../bookmark';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-update-bookmark',
  templateUrl: './update-bookmark.component.html',
  styleUrls: ['./update-bookmark.component.css']
})
export class UpdateBookmarkComponent implements OnInit {

  id: number;
  bookmark: Bookmark;
  constructor(private route: ActivatedRoute,private router: Router,private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmark = new Bookmark();

    this.id = this.route.snapshot.params['id'];
    
    this.bookmarkService.getBookmark(this.id)
      .subscribe(data => {
        console.log(data)
        this.bookmark = data;
      }, error => console.log(error));
  }

  updateBookmark() {
    this.bookmarkService.updateBookmark(this.id,this.bookmark)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bookmark = new Bookmark();
    this.gotoList();
  }

  onSubmit() {
    this.updateBookmark();    
  }

  gotoList() {
    this.router.navigate(['/bookmarks']);
  }

}
