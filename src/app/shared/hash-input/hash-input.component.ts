import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hb-hash-input',
  templateUrl: './hash-input.component.html',
  styleUrls: ['./hash-input.component.css']
})
export class HashInputComponent implements OnInit {
  
  easteregg: string = 'hope';
  @Input() code: string;
  @Output() refreshCode: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  tacalepaunessecarrinhoMarcos() {
    this.refreshCode.emit(this.easteregg);
  }

}
