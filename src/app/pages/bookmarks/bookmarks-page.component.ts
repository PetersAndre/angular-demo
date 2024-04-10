import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';
import { Post } from '../../models/post';
import { PostComponent } from '../../components/post/post.component';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-bookmarks-page',
  templateUrl: '../home/home-page.component.html',
  standalone: true,
  imports: [PostComponent, CommonModule],
})
export class BookmarksPageComponent implements OnInit {
  public posts!: Post[];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.posts = this.bookmarkService.getBookmarks();
  }

  public updateBookmarks(event: any): void {
    if (event.isBookmarked) {
      this.bookmarkService.addBookmark(event.post);
    } else {
      this.bookmarkService.removeBookmark(event.post);
    }
  }
}
