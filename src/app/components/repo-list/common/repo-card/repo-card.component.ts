import { Component, OnInit, Input } from '@angular/core';
import { RepositoryCardInterface } from '../../interfaces/repo-card';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  @Input('repositoryData')
  repositoryData: RepositoryCardInterface;

  constructor() { }

  ngOnInit() { }

}
