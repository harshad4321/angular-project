
 import { Post } from './post.model';
import{Injectable}from'@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn:'root'})

export class postsService{
private posts:Post[] = [];
private postsUdated =new Subject <Post[]>();

getPosts(){
return [...this.posts];
}
getPostUpdateListener(){
return this.postsUdated.asObservable();
}

addPost(title:string,content:string){
const post:Post={title:title,content:content};
this.posts.push(post);
this.postsUdated.next([...this.posts]);
}
}
