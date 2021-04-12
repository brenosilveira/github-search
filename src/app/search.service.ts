import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {
  URL_API = 'https://api.github.com/users/felipefialho'
  URL_APITESTE = 'https://api.github.com/users'

  constructor (private http: HttpClient) { }

  public getUser(): Promise<any> {
    return this.http.get(this.URL_API)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public SearchUser(term: String): Observable<any> {
    return this.http.get<any>(`${this.URL_APITESTE}/${term}`)
      .pipe((resposta) => resposta)
  }
}
