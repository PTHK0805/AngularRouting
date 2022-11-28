import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  year: any;
  month: any;

  constructor(private route: ActivatedRoute, private router:Router) { }

  onClick() {
    this.router.navigate(['/archive']);
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.year = params['year'];
      this.month = params['month'];
    });
  }

}
