import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Review, ReviewRating } from '../../models/review';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class ReviewPageComponent {
  public ReviewRating = ReviewRating;

  public reviews: Review[] = [];

  public formGroup: FormGroup = new FormGroup({
    author: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.maxLength(1024),
    ]),
    rating: new FormControl(ReviewRating.Neutral, [Validators.required]),
  });

  public addReview(): void {
    const review: Review = this.formGroup.value;
    this.reviews.push(review);
    this.formGroup.reset();
    this.formGroup.patchValue({ rating: ReviewRating.Neutral });
  }
}
