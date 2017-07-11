import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RepoListService {
  username: string;
  users_url: string;

  constructor(public http: Http) {
    console.log('Repo List Service initialized...');
    this.username = 'wilfernandesjr';
    this.users_url = 'https://api.github.com/users/'
  }

  getUser() {
    return this.http.get(this.users_url + this.username)
      .map(res => res.json());
  }

  getStarred() {
    return this.http.get(this.users_url + this.username + '/starred')
      .map(res => res.json());
  }

}
