import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  categorys = ['ברירת מחדל']
  category = 'כללי';
  sum = 0;
  method = '';
  successMessage = 'הפעולה התבצעה בהצלחה!';
  successAction = 'בטל פעולה'; 
  failureMessage = 'הפעולה נכשלה!';
  selectedCategory = "";


  onClick(){
    // this.createExpense();
    console.log(this.category);
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
      responseData['success']? this.openSnackBarSuccess(): this.openSnackBarFailure();
      ;
    },
    arr => {this.openSnackBarFailure();})
  }


  loadCategorys(){
    const headers = { 'Content-Type': 'application/json'};
    this.http.get<any>('https://vvhi33w30k.execute-api.eu-west-1.amazonaws.com/dev/categorys', {headers})
    .subscribe(responseData => {
      if(responseData['success']){
        this.categorys = responseData['categorys'];
        console.log("loadCategories Success!!!");
        console.log(responseData);
  
      }else{
        this.openSnackBarFailureOnLoad();
      }
    },
    arr => {this.openSnackBarFailureOnLoad();})
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
openSnackBarFailureOnLoad() {
  this._snackBar.open('FailureOnLoad', null, {
    duration: 2000,
    direction:'rtl',
    verticalPosition: 'top',
    panelClass: ['snackbar-failure']
  });
}

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadCategorys();
  }



  // preInsert
  // postInsert
  // update DB
  // update view



  // insertOne();
  // updateCurrentState();
  // updateView();


  // onPageLoad:
  //   cats = getCategory();  
  //   mat-select => from cats;
}
