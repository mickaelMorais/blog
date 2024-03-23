import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() date:string = ''
  @Input() title:string = ''
  @Input() img:string = ''
  @Input() description:string = ''
  @Input() id:string='0'

  constructor() { }

  ngOnInit(): void {
  }

}
