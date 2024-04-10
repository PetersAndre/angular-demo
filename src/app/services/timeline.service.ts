import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  public instanceUrl: string = 'https://mastodon.social';
  public acctId: string = '110266162634306901';
  public limit: number = 32;

  constructor(private http: HttpClient) {}

  public getTimeline(): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.instanceUrl}/api/v1/accounts/${this.acctId}/statuses`,
      {
        params: { limit: this.limit },
      }
    );
  }
}
