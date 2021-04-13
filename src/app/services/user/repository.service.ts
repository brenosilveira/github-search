import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class RepositoryService {

  constructor (private http: HttpClient) { }

  public getRepository(userName: string): Promise<any> {
    return this.http.get(`${environment.url_api}/users/${userName}/repos`)
      .toPromise()
      .then((res: any) => {
        const resultOrdered = res.sort((a: any, b: any) => {
          return b.stargazers_count - a.stargazers_count
        })
        return resultOrdered
      })
      .catch((err: any) => err.message)
  }
}
