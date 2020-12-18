import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PostioService } from '../services/postio.service';
import { selfPost } from '../post/selfpost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  data:Array<any>;
  userData:Array<any>;
  userComment:Array<any>;
  dataTag:Array<any>;

  id:number = 0;
  newSelfPost: string = '';
  selfPostList:Array<selfPost> = [];

  constructor(private PostioService: PostioService){
    this.data = new Array<any>();
    this.userData = new Array<any>();
    this.userComment = new Array<any>();
    this.dataTag = new Array<any>();
  }

  getDataFromAPI(){
    this.PostioService.getData().subscribe((data) => {
      console.log(data)

      this.data = data.data;
    })

    console.log(this.data)
  }

  getUserFromAPI(){
    this.PostioService.getUser().subscribe((userData) => {
      console.log(userData)
      this.userData = userData.data;
    })

    console.log(this.userData);
  }

  getCommentFromAPI(){
    this.PostioService.getComment().subscribe((userComment) => {
      console.log(userComment);
      this.userComment = userComment.data;
    })

    console.log(this.userComment);
  }

  addSelfPost(){
    this.selfPostList.push({
      id: this.id,
      text: this.newSelfPost,
    })
    this.id = this.id + 1;
    this.newSelfPost = '';
  }

  getTagFromAPI(){
    this.PostioService.getTag().subscribe((dataTag) => {
      console.log(dataTag);
      this.dataTag = dataTag.data;
    })

    console.log(this.dataTag)
  }

  ngOnInit(): void {
    // this.getCommentFromAPI();
    // this.getDataFromAPI();
    // this.getUserFromAPI();
    // this.getTagFromAPI();
  }

  deleteSelfPost(idx){
    const index: number = this.selfPostList.indexOf(idx);
    this.selfPostList.splice(index,1);
  }
  

}
