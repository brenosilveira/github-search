import { Component, Input, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/user/repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from '../../shared/repository.model';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  public repos?: Repository[]

  constructor(private repositoryService: RepositoryService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(() => {
      this.refresh()
    })
  }

  ngOnInit(): void {
    this.refresh()
  }

  refresh() {
    this.repos = this.route.snapshot.data.repositories
  }

}
