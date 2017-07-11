import { Component, OnInit } from '@angular/core';

import { RepoCardComponent } from './common/repo-card/repo-card.component';
import { RepoListService } from '../../services/repo-list.service';

import { RepositoryCardInterface } from './interfaces/repo-card.interface';
import { LanguageFilter } from './interfaces/language-filter.interface';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  repositoryData: RepositoryCardInterface;
  showFilters: boolean;
  selectedOrder: string;
  selectedFilter: LanguageFilter;
  languageFilters: LanguageFilter[];
  currentUser: User;

  constructor(private RepoListService: RepoListService) { }

  ngOnInit() {
    this.RepoListService.getStarred().subscribe((repositoryData) => {

      this.repositoryData = repositoryData;
      const languageFilters = [];

      // push defalut option
      languageFilters.push({ label: 'All', value: -1 });

      // parse result and create language filters
      repositoryData.forEach(function (element, index) {
        const filter = {};
        filter['label'] = (element.language || 'not specified');
        filter['value'] = (element.language || 'not specified');

        // tslint:disable-next-line:no-shadowed-variable
        if (languageFilters.findIndex(index => index.label === filter['label']) === -1) {
          languageFilters.push(filter);
        }
      });

      this.languageFilters = languageFilters

    });

    this.selectedOrder = 'name';
  }

  showFiltersToggle() {
    this.showFilters = !this.showFilters;
  }

}
