import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true,
  imports: [DatePipe, CommonModule],
})
export class PostComponent {
  @Input()
  public post!: Post;

  public isBookmarked = false;

  @Output()
  public bookmarked = new EventEmitter<{ post: Post; isBookmarked: boolean }>();

  public onBookmarkButtonClick(): void {
    this.isBookmarked = !this.isBookmarked;
    this.bookmarked.emit({ post: this.post, isBookmarked: this.isBookmarked });
  }
}
