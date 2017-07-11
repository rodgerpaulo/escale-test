import { Component, OnInit } from '@angular/core';
import { RepoListService } from '../../services/repo-list.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  starredRepos: StarredRepos;

  constructor(private RepoListService: RepoListService) { }

  ngOnInit() {
    this.RepoListService.getStarred().subscribe((starredRepos) => {
      this.starredRepos = starredRepos;
    })
  }

}

interface StarredRepos {
  name: string;
  full_name: string;
  language: string;
  language_url: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  created_at: string;
  pushed_at: string;
  owner: Owner;
}

interface Owner {
  avatar_url: string;
  html_url: string;
  login: string;
}