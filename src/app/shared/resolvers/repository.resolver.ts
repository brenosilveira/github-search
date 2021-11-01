import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RepositoryService } from 'src/app/services/user/repository.service';
import { Repository } from '../repository.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryResolver implements Resolve<Repository[] | null>  {

  constructor(private repositoryService: RepositoryService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Repository[] | null> {
    return this.repositoryService.getRepository(route.params.name)
      .then(res => {
        return Promise.resolve(res)
      }).catch(error => {
        console.error(error)
        return Promise.resolve(null)
      })
  }
}
