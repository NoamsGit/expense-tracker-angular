import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollListComponent implements OnInit {
  items = ["קניות מכולת", "קניות סופר","מסעדות","בגדים","דלק","ארנונה","משהו נוסף","ואפליו עוד אחד"]

  // items = Array.from({length: 1000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}
