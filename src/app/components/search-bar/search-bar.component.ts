import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { User } from 'src/app/shared/user.model';
import { SearchService } from '../../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [ SearchService ]
})
export class SearchBarComponent implements OnInit {

  public searchData!: Observable<any>;
  private subjectSearch: Subject<string> = new Subject<string>()

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.searchData = this.subjectSearch
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termSearch: string) => {
          if(termSearch.trim() === '') {
            return of<any>('')
          }

          return this.searchService.SearchUser(termSearch)
        })
      )
      this.searchData.subscribe((search: any) => console.log(search)
      )}

  public search(termSearch: string): void {
    // this.searchData = this.searchService.SearchUser(termSearch)
    //   this.searchData.subscribe(
    //     (data: any) => console.log(data)
    //     // (error) => console.log(error)//this.router.navigateByUrl('/not-found')
    //   )
    this.subjectSearch.next(termSearch)
    console.log(termSearch)
  }

}
