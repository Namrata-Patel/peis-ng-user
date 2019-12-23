import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserLibComponent } from './user-lib.component';


@NgModule({
  declarations: [UserLibComponent],
  imports: [
    BrowserModule,
    CommonModule, HttpClientModule
    
  ],
  exports: [UserLibComponent]
})
export class UserLibModule { }
