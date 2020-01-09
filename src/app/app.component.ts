import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Rest-app";

  posts: any;
  comments: any;

  getPostsPerUser(posts) {
    console.log({ posts });
    this.posts = posts;
  }

  getCommentById(comments) {
    this.comments = comments;
    console.log({ comments });
  }
}
