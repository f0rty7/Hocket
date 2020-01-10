import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiDataService {
  constructor(private http: HttpClient) {}
  userUrl: string = "http://jsonplaceholder.typicode.com/users";
  postsUrl: string = "https://jsonplaceholder.typicode.com/posts";
  commentsUrl: string = "https://jsonplaceholder.typicode.com/comments";

  getUserdetails() {
    return this.http.get(this.userUrl);
  }

  fetchPosts() {
    return this.http.get(this.postsUrl);
  }

  fetchComments() {
    return this.http.get(this.commentsUrl);
  }
}
