import { Component, OnInit } from '@angular/core';

import { RepoCardComponent } from './common/repo-card/repo-card.component';
import { RepoListService } from '../../services/repo-list.service';

import { RepositoryCardInterface } from './interfaces/repo-card';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  repositoryData: RepositoryCardInterface;
  showFilters: boolean;
  selectedFilter: string;
  languageFilter: LanguageFilter;

  constructor(private RepoListService: RepoListService) { }

  ngOnInit() {
    this.RepoListService.getStarred().subscribe((repositoryData) => {
      this.repositoryData = repositoryData;
      // repositoryData.forEach(function(element, index){

      // });
    });
    this.selectedFilter = 'name';
  }

  showFiltersToggle() {
    this.showFilters = !this.showFilters;
  }

}

interface LanguageFilter {
  language: string;
}
