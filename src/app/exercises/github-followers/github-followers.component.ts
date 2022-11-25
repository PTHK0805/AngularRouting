import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from 'src/app/exercises/github-followers/github-followers.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any;
 
  constructor(private service: GithubFollowersService, private route: ActivatedRoute) {}

  getFollower(follower: any) {
    console.log(follower);
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(followers => {
      this.followers = followers
      console.log(followers);
    })
    
    this.route.queryParamMap.subscribe(params => {
      console.log('Query Params', params);
    })
    
    merge(this.route.paramMap, this.route.queryParamMap).subscribe((combine: any) => {
      console.log('Combined ',combine);
    })
  }

}
