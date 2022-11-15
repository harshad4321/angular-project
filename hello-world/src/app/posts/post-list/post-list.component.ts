import { postsService } from './../post.service';
import { Component,Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
selector:'app-post-list',
templateUrl:'./post-list.component.html',
styleUrls:['./post-list.component.css']
})



export class PostlistComponent{

 @Input() posts:Post[]=[ ];
constructor(postsService:postsService){}
}

