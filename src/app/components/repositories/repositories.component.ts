import { Component, Input, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/user/repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  providers: [ RepositoryService ]
})
export class RepositoriesComponent implements OnInit {

  @Input() public state: any
  public repos: any

  constructor(private repositoryService: RepositoryService, private router: Router) { }

  ngOnInit(): void {
    this.getRepository(this.state?.login)
  }

  async getRepository(termSearch: string): Promise<any> {
    try {
      let result = await this.repositoryService.getRepository(termSearch)
      this.repos = result
    } catch {
      return this.router.navigateByUrl('/not-found')
    }
  }

}
