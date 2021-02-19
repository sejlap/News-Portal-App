import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ShowComponent } from './news/show/show.component';
import { AddEditNewsComponent } from './news/add-edit-news/add-edit-news.component';
import { AdminsComponent } from './admins/admins.component';
import { SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ShowComponent,
    AddEditNewsComponent,
    AdminsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
