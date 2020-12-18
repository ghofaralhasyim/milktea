import { Component, OnInit } from '@angular/core';
import { PostioService } from '../services/postio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dataMyPost: Array<any>;

  constructor(private PostioService: PostioService) { 
    this.dataMyPost = new Array<any>();
  }

  getMyPostFromAPI(){
    this.PostioService.getPostSingleUser().subscribe((dataMyPost) => {
      console.log(dataMyPost);

      this.dataMyPost = dataMyPost.data;
    })

    console.log(this.dataMyPost)
  }

  ngOnInit(): void {
  }

}
