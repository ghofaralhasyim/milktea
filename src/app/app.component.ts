import { Component } from '@angular/core';
import { PostioService } from './services/postio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uasone';

  data:Array<any>;
  userComment:Array<any>;

  constructor(private PostioService: PostioService){
    this.data = new Array<any>();
    this.userComment = Array<any>();
  }

  getDataFromAPI(){
    this.PostioService.getData().subscribe((data) => {
      console.log(data)

      this.data = data;
    })

    console.log(this.data)
  }

  getCommentFromAPI(){
    this.PostioService.getComment().subscribe((userComment) => {
      console.log(userComment);
      this.userComment = userComment.data;
    })

    console.log(this.userComment);
  }

  ngOnInit(): void {
    this.getCommentFromAPI();
  }
}
