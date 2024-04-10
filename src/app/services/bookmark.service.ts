import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class BookmarkService {
  private bookmarks: Post[] = [];

  public getBookmarks(): Post[] {
    return this.bookmarks;
  }

  public addBookmark(post: Post): void {
    this.bookmarks.push(post);
  }

  public removeBookmark(post: Post): void {
    this.bookmarks = this.bookmarks.filter(
      (bookmark) => bookmark.id !== post.id
    );
  }
}
