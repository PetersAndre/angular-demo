export interface Review {
  author: string;
  content: string;
  rating: ReviewRating;
}

export enum ReviewRating {
  Negative,
  Neutral,
  Positive,
}
