import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SearchService } from 'src/app/services/user/search.service';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})

export class SearchResolver implements Resolve<User> {

  constructor(private searchService: SearchService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<User> {
    return this.searchService.searchUser(route.params.name)
      .then((res) => {
        return Promise.resolve(res)
      })
      .catch(error => {
        this.router.navigate(['not-found'])
        return Promise.reject(error)
      })
  }
}
