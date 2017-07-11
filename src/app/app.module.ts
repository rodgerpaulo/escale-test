import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';

import { RepoListService } from './services/repo-list.service';
import { RepoCardComponent } from './components/repo-list/common/repo-card/repo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [RepoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
