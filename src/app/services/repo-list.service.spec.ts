import { TestBed, inject } from '@angular/core/testing';

import { RepoListService } from './repo-list.service';

describe('RepoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoListService]
    });
  });

  it('should be created', inject([RepoListService], (service: RepoListService) => {
    expect(service).toBeTruthy();
  }));
});
