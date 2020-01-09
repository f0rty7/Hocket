import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit{
  constructor( private http: HttpClient) {}
  @Input() posts: any;
  @Input() comments: any;
  postId: number = 0;
  postDisplay: any;
  commentDisplay: any;

  ngOnInit(){
  }

  ngOnChanges() {
    console.log("Posts in content", this.posts);
    if (this.posts && this.comments) {
      this.postDisplay = [this.posts[0]];
      this.commentDisplay = [this.comments[0]];
    }
  }

  prevPost() {
    this.postId -= 1;
    if(this.postId < 0){
      this.postId = 9;
    }
    this.postDisplay = [this.posts[this.postId]];
  }

  nextPost() {
    this.postId += 1;
    if(this.postId > 9){
      this.postId = 0;
    }
    this.postDisplay = [this.posts[this.postId]];
  }

  submitComment(){
    alert("Comment Submitted");
  }
}
