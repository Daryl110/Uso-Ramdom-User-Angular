import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  API_URL = 'https://jsonplaceholder.typicode.com/posts';
  post;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.http.get(this.API_URL).subscribe((data) => {
      this.post = data;
    });
  }

}
