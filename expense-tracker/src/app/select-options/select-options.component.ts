import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})
export class SelectOptionsComponent implements OnInit {
  @Output() methodSelected = new EventEmitter<string>();
   
   onSelectMethod(event){
    this.methodSelected.emit(event.target.value);
   }

  constructor() { }

  ngOnInit(): void {
  }

}
