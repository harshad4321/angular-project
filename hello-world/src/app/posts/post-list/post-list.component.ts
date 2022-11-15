import{Subscription}from'rxjs'
import { postsService } from './../post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';

@Component({
selector:'app-post-list',
templateUrl:'./post-list.component.html',
styleUrls:['./post-list.component.css']
})



export class PostlistComponent implements OnInit,OnDestroy  {

 posts:Post[]=[];
  private postsSub!: Subscription;

constructor(public postsService:postsService){}
ngOnInit(): void {
this.posts=this.postsService.getPosts();
 this.postsSub = this.postsService.getPostUpdateListener()
.subscribe((posts:Post[])=>{
this.posts=posts;
});
}
ngOnDestroy(): void {
this.postsSub.unsubscribe();
}
}

