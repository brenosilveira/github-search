import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../../services/user/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [SearchService]
})
export class SearchBarComponent implements OnInit {

  @Input() public state: any

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  async search(termSearch: string): Promise<any> {
    if (termSearch === '') {
      alert('Preencha o input')
    }
    try {
      let result = await this.searchService.searchUser(termSearch)
      return this.router.navigate(['/result'], { state: result, replaceUrl: true })
    } catch {
      return this.router.navigate(['/not-found'])
    }
  }
}
