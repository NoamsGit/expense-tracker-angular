import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-list-item',
  templateUrl: './scroll-list-item.component.html',
  styleUrls: ['./scroll-list-item.component.css']
})
export class ScrollListItemComponent implements OnInit {

  @Input() category:string = 'קטגוריה'
  @Input() initialBudget:string = 'תקציב התחלתי'
  @Input() currentSum:string = 'סכום נוכחי'


  constructor() { }

  ngOnInit(): void {
  }

}
