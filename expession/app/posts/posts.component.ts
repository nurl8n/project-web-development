import { Component, OnInit } from '@angular/core';
import {Post} from '../models';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] | undefined;
  loaded: boolean | undefined;
  newPost: string;

  constructor(private postsService: PostsService) {
    this.newPost = '';
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.loaded = true;
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  deletePost(id: number) {
    // @ts-ignore
    this.posts = this.posts.filter((x) => x.id !== id);
    this.posts = this.posts;
  }

  addPost() {
    const post = {
      title: this.newPost
    };
    // tslint:disable-next-line:no-shadowed-variable
    this.postsService.addPost(post as Post).subscribe((post) => {
      console.log(post);
      // @ts-ignore
      this.posts.unshift(post);
      this.newPost = '';
      this.loaded = true;
    });
  }
}
