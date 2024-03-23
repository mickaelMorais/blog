import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  img:string=''
  title:string=''
  description:string=''
  id:string|null ='0'

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((e) => this.id = e.get('id'))
    this.setvaluesToComponent(this.id)
  }
  setvaluesToComponent(id:String|null){
    const result = data.filter(e => e.id == id)[0]
    this.img = result.img
    this.title = result.title
    this.description = result.description
  }
}
