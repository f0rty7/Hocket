import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }
  userUrl: string = 'http://jsonplaceholder.typicode.com/users';
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  users: any = [];
  posts: any = [];

  getUserdetails() {
    const resp = this.http.get(this.userUrl);
    resp.subscribe((res: []) => {
      res.sort((a: any, b: any) => (a.name < b.name) ? -1 : 1);
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

  fetchPostByUserId(id) {
    console.log(id);
    const filtPost = this.posts.filter((post) => post.userId === id);
    console.log(filtPost);
  }
}
