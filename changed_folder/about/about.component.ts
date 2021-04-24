import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  newComments: Comment[];
  currentComment: Comment;

  constructor() {
    this.newComments = [new Comment(1, 'Actually good'), new Comment(2, 'Still need to be upgraded')];
    this.currentComment = new Comment()
  }

  ngOnInit(): void {
  }

  addComment() {
    if (this.currentComment.title !== '') {
      this.currentComment.id = this.newComments.length + 1;
      this.newComments.push(this.currentComment);
    }
  }

  removeComment(index: number) {
    this.newComments = this.newComments.filter((x) => x.id !== index);
  }
}
