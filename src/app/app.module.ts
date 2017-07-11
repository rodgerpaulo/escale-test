import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';

import { RepoListService } from './services/repo-list.service';
import { RepoCardComponent } from './components/repo-list/common/repo-card/repo-card.component';

import { FilterListPipe } from './pipes/filter-list.pipe';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoCardComponent,
    FilterListPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    OrderModule
  ],
  providers: [RepoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
