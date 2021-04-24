import { Component, OnInit } from '@angular/core';
import {Post} from '../models';
import {ActivatedRoute} from '@angular/router';
import {POSTS} from '../fake-db';
import {Location} from '@angular/common';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post | undefined;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.postsService.getPost(id).subscribe((post) => {
        this.post = post;
      });
    });
  }

  goBack() {
    this.location.back();
  }

}
