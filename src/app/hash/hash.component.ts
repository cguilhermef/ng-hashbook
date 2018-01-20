import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'hb-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit {

  hash: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.hash = UUID.UUID();
  }

  startNewChat() {
    this.router.navigate(['/new-chat', this.hash]);
  }

}
