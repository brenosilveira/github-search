import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/user.model';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  public searchUser(userName: string): Promise<User> {
    return this.http.get<User>(`${environment.url_api}/users/${userName}`)

      .toPromise()
      .then((res) => res)
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
