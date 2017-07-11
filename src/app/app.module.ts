import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';

import { RepoListService } from './services/repo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RepoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
