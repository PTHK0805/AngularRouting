import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  archives = [
    {year: '2017', month: '1'},
    {year: '2017', month: '2'},
    {year: '2017', month: '3'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
