import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-list-item',
  templateUrl: './scroll-list-item.component.html',
  styleUrls: ['./scroll-list-item.component.css']
})
export class ScrollListItemComponent implements OnInit {

  @Input() category:string = 'קטגוריה'
  @Input() initialBudget:number = 99
  @Input() currentSum:number = 55


  constructor() { }

  ngOnInit(): void {
  }

}
