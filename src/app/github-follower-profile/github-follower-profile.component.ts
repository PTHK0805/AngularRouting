import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, of } from 'rxjs';

@Component({
  selector: 'app-github-follower-profile',
  templateUrl: './github-follower-profile.component.html',
  styleUrls: ['./github-follower-profile.component.scss'],
})
export class GithubFollowerProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ob1 = of(1, 2, 3, 4, 5);
  ob2 = of(6, 7, 8, 9, 10);
  ob3 = merge(this.ob1, this.ob2);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      console.log('ID from param', id);
    });

    // Or

    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log('ID from paramMap', id);
    });

    // Or

    let id = this.route.snapshot.params['id'];
    console.log('ID from snapshot', id);

    this.ob3.subscribe((combine) => {
      console.log(combine);
    });

  }
}
