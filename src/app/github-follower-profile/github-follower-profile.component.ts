import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-follower-profile',
  templateUrl: './github-follower-profile.component.html',
  styleUrls: ['./github-follower-profile.component.scss']
})
export class GithubFollowerProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log('ID from param',id);
    })

    // Or

    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log('ID from paramMap', id);
    })

    // Or

    let id = this.route.snapshot.params['id'];
    console.log('ID from snapshot', id);

    // Get All Route Parameters
    this.route.paramMap.subscribe(params => {
      console.log('All params', params);
    })
  }

}
