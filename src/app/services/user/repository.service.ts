import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Repository } from '../../shared/repository.model';

@Injectable()
export class RepositoryService {

  constructor(private http: HttpClient) { }

  public getRepository(userName: string): Promise<Repository> {
    return this.http.get<any>(`${environment.url_api}/users/${userName}/repos`)
      .toPromise()
      .then((res) => {
        const resultOrdered = res.sort((a: any, b: any) => {
          return b.stargazers_count - a.stargazers_count;
        })
        return resultOrdered;
      })
      .catch((err) => {
        switch (err.status) {
          case 404:
            throw new Error('Not Found');

          default:
            throw new Error(`Error: ${err}`);
        }
      });
  }
}
