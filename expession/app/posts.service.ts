import { Injectable } from '@angular/core';
import {POSTS} from './fake-db';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Post} from './models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  getPosts() {
    return of(POSTS);
  }

  getPost(id: number) {
    const post = POSTS.find((x) => x.id === id);
    return of(post);
  }

  addPost(post: Post): Observable<Post> {
    // @ts-ignore
    return this.client.post('../posts', post);
  }
  // deletePost(id: number) {
  //
  // }
}
