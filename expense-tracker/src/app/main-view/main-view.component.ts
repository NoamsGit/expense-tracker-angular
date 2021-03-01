import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  category = 'כללי';
  sum = 0;
  method = '';
  successMessage = 'הפעולה התבצעה בהצלחה!';
  successAction = 'בטל פעולה'; failure
  failureMessage = 'הפעולה נכשלה!';
  

  onClick(){
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
      responseData['insert_success']? this.openSnackBarSuccess(): this.openSnackBarFailure();
      ;
    },
    arr => {this.openSnackBarFailure();})
  }

  openSnackBar() {
    this._snackBar.open('hello');
  }

  openSnackBarSuccess() {
    this._snackBar.open(this.successMessage, this.successAction, {
      duration: 3000,
      direction:'rtl',
      verticalPosition: 'top',
      panelClass: ['snackbar-success']
    });
}

openSnackBarFailure() {
  this._snackBar.open(this.failureMessage, null, {
    duration: 2000,
    direction:'rtl',
    verticalPosition: 'top',
    panelClass: ['snackbar-failure']
  });
}

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // preInsert
  // postInsert
  // update DB
  // update view



  // insertOne();
  // updateCurrentState();
  // updateView();

}
