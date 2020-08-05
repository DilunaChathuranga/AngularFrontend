import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private baseUrl = 'http://localhost:8081/springboot-crud-rest/bookmarks';
  constructor(private http: HttpClient, private toastr:ToastrService) { }

  getBookmark(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBookmark(bookmark: Object): Observable<Object> {
    this.toastr.success('New Bookmark Saved Successfully');
    return this.http.post(`${this.baseUrl}`, bookmark);
   ;
  }

  updateBookmark(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBookmark(id: number): Observable<any> {
    this.toastr.error('Bookmark  Delete Successfully');
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBokmarksList(): Observable<any> {
    
    console.log(this.http.get(`${this.baseUrl}`));
    return this.http.get(`${this.baseUrl}`);
  }

}
