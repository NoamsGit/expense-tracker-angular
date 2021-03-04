import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './main-view/main-view.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ScrollListComponent } from './scroll-list/scroll-list.component';
import { ScrollListItemComponent } from './scroll-list-item/scroll-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { SelectOptionsComponent } from './select-options/select-options.component';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ScrollListComponent,
    ScrollListItemComponent,
    FormWrapperComponent,
    SelectOptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ScrollingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
