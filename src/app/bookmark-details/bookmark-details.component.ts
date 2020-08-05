import { BookmarkService } from './../bookmark.service';
import { Bookmark } from './../bookmark';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.css']
})
export class BookmarkDetailsComponent implements OnInit {
  id: number;
  bookmark: Bookmark;
  constructor(private route: ActivatedRoute,private router: Router,private bookmarkService: BookmarkService) { }

  ngOnInit(){
    this.bookmark = new Bookmark();

    this.id = this.route.snapshot.params['id'];
    
    this.bookmarkService.getBookmark(this.id)
      .subscribe(data => {
        console.log(data)
        this.bookmark = data;
      }, error => console.log(error));

  }
  
  list(){
    this.router.navigate(['bookmarks']);
  }
      
}
