import { Component, OnInit } from '@angular/core';
import { PostioService } from '../services/postio.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  dataMyPost: Array<any>;
  dataTag: Array<any>;

  constructor(private PostioService: PostioService) { 
    this.dataMyPost = new Array<any>();
    this.dataTag = new Array<any>();
  }

  getMyPostFromAPI(){
    this.PostioService.getPostSingleUser().subscribe((dataMyPost) => {
      console.log(dataMyPost);

      this.dataMyPost = dataMyPost.data;
    })

    console.log(this.dataMyPost)
  }

  getTagFromAPI(){
    this.PostioService.getTag().subscribe((dataTag) => {
      console.log(dataTag);
      this.dataTag = dataTag.data;
    })

    console.log(this.dataTag)
  }

  ngOnInit(): void {
    // this.getMyPostFromAPI();
    // this.getTagFromAPI();
  }

}
