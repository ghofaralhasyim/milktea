import { Component, OnInit } from '@angular/core';
import { PostioService } from '../services/postio.service';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  friend: Array<any>;

  constructor(private PostioService: PostioService) {
    this.friend = new Array<any>();
   }

  getFriendListFromAPI(){
    this.PostioService.getUserLimit().subscribe((friend) => {
      console.log(friend);
      this.friend = friend.data;
    })

    console.log(this.friend)
  }

  ngOnInit(): void {
    this.getFriendListFromAPI();
  }

}
