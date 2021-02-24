import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  category = 'כללי';
  sum = 0
  method = ''

  onClick(){
    console.log('12344567789');

    console.log(this.category, this.sum, this.method);
    console.log(new Date());
    this.createExpense();
  }

  createExpense(){
    // const headers = { 'Access-Control-Allow-Origin': '*'}; 
    const headers = { 'Content-Type': 'application/json'};

    const expense = {
      category : this.category,
       sum: this.sum,
       method: this.method,
       date : new Date()
      }
   
    this.http.post('https://hqkmfv6or2.execute-api.eu-west-1.amazonaws.com/dev/expenses', expense, {headers})
    .subscribe(responseData => {
      console.log(responseData);
    })
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
