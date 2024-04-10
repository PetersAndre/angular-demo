import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { TimelineService } from '../../services/timeline.service';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [PostComponent, CommonModule],
})
export class HomePageComponent implements OnInit {
  public title: string = 'Angular Mastodon Demo';
  public description: string = 'A simple Mastodon client';

  public posts!: Observable<Post[]>;

  public constructor(
    private timelineService: TimelineService,
    private bookmarkService: BookmarkService
  ) {}

  ngOnInit(): void {
    this.posts = this.timelineService.getTimeline();
  }

  public updateBookmarks(update: { post: Post; isBookmarked: boolean }): void {
    if (update.isBookmarked) {
      this.bookmarkService.addBookmark(update.post);
    } else {
      this.bookmarkService.removeBookmark(update.post);
    }
  }
}
