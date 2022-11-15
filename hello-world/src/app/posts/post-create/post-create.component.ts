import { postsService } from './../post.service';
import { NgForm } from "@angular/forms";
import { Component } from '@angular/core';

@Component({
selector:'app-post-create',
templateUrl:'./post-create.component.html',
styleUrls:['./post-create.component.css']
})
export class PostCreateComponent{
 entredContent="";
enteredTitle ="";

constructor(public postsService:postsService){}


onAddPost(form: NgForm){
if(form.invalid){
return;
}
this.postsService.addPost(form.value.title,form.value.content)
}
}
