import { ApiDataService } from './../api-data.service';
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private apiService: ApiDataService) {}
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
  this.apiService.fetchComments().subscribe((data: []) => {
      this.comments = data;
    })
  }

  getUserdetails() {
    this.apiService.getUserdetails().subscribe((res: []) => {
      res.sort((a: any, b: any) => (a.name < b.name ? -1 : 1));
      this.users = res;
    });
  }

  fetchPosts() {
    this.apiService.fetchPosts().subscribe((res: []) => {
      this.posts = res;
    });
  }

  fetchPostById(id) {
    this.usersId = id;
    const filtPost = this.posts.filter(post => post.userId === id);
    this.postsPerUser.emit(filtPost);
    this.fetchCommentsById(id);
  }

  fetchCommentsById(id){
    this.usersId = id;
    const filtComment = this.comments.filter(comment =>comment.postId === id);
    this.commentsPerId.emit(filtComment);
  }
}
