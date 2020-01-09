import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private http: HttpClient) {}
  userUrl: string = "http://jsonplaceholder.typicode.com/users";
  postsUrl: string = "https://jsonplaceholder.typicode.com/posts";
  commentsUrl: string = "https://jsonplaceholder.typicode.com/comments";
  users: any = [];
  posts: any = [];
  comments: any = [];

  usersId: number;

  @Output() postsPerUser: EventEmitter<any> = new EventEmitter();
  @Output() commentsPerId: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.fetchPosts();
    this.getUserdetails();
    this.fetchComments();
  }

  fetchComments() {
    const commentsData = this.http.get(this.commentsUrl);
    commentsData.subscribe((data: []) => {
      this.comments = data;
      console.log(this.comments);
    })
  }

  getUserdetails() {
    const resp = this.http.get(this.userUrl);
    resp.subscribe((res: []) => {
      res.sort((a: any, b: any) => (a.name < b.name ? -1 : 1));
      this.users = res;
      console.log(this.users);
    });
  }

  fetchPosts() {
    const postData = this.http.get(this.postsUrl);
    postData.subscribe((res: []) => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  fetchPostById(id) {
    console.log(id);
    this.usersId = id;
    const filtPost = this.posts.filter(post => post.userId === id);
    console.log(filtPost);
    this.postsPerUser.emit(filtPost);
    this.fetchCommentsById(id);
  }

  fetchCommentsById(id){
    this.usersId = id;
    const filtComment = this.comments.filter(comment =>comment.postId === id);
    console.log("filetered comments", filtComment);    
    this.commentsPerId.emit(filtComment);
  }
}
