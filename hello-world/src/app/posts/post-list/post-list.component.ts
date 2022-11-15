import { postsService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
selector:'app-post-list',
templateUrl:'./post-list.component.html',
styleUrls:['./post-list.component.css']
})



export class PostlistComponent implements OnInit{

 posts:Post[]=[ ];

constructor(public postsService:postsService){}
ngOnInit(): void {
this.posts=this.postsService.getPosts();
}
}

