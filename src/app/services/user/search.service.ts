import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class SearchService {

  constructor (private http: HttpClient) { }

  public searchUser(userName: string): Promise<any> {
    return this.http.get(`${environment.url_api}/users/${userName}`)
      .toPromise()
      .then((res: any) => res)
      .catch((err: any) => err.message)
  }
}
